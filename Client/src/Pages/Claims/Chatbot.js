import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi, I'm Eva. How can I help you today?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Static questions and answers related to bail and justice
  const questionsAndAnswers = {
    "What is bail?": "Bail is the temporary release of an accused person awaiting trial, sometimes on condition that a sum of money is lodged to guarantee their appearance in court.",
    "How do I apply for bail?": "To apply for bail, you or your lawyer can file a bail application in the relevant court, outlining reasons for your release until trial.",
    "Can bail be denied?": "Yes, bail can be denied if the court believes the accused is a flight risk, may interfere with witnesses, or is likely to commit further offenses.",
    "What are bail conditions?": "Bail conditions are restrictions set by the court, such as surrendering a passport, reporting to the police, or not contacting witnesses.",
    "What happens if I breach bail conditions?": "Breaching bail conditions can result in the revocation of bail, and you may be taken into custody until your trial.",
    "Can I appeal a bail decision?": "Yes, if bail is denied, you may appeal the decision in a higher court.",
    "How long does it take to get bail?": "The time it takes to get bail depends on the complexity of the case and the availability of the court, but it can take from a few hours to several days.",
    "What is surety?": "A surety is a person who agrees to be responsible for ensuring that the accused complies with bail conditions, often by pledging a sum of money.",
    "Can minors apply for bail?": "Yes, minors can apply for bail, but special considerations may apply due to their age and legal standing.",
    "What is a bail bond?": "A bail bond is a financial arrangement made on behalf of the defendant to secure their release from jail, often through a bail bondsman.",
    "Can I travel while on bail?": "Whether you can travel depends on your bail conditions. You may need court permission to leave the jurisdiction.",
    "Is bail refunded?": "If you meet all court appearances and conditions, the bail money is usually refunded at the conclusion of the case.",
    "What happens if I can't afford bail?": "If you can't afford bail, you may apply for a reduction, seek help from a bail bondsman, or in some cases, you may remain in custody until trial.",
    "What is preventive detention?": "Preventive detention is when an accused is held in custody without bail because they are considered a risk to public safety.",
    "What are my rights if I'm denied bail?": "If bail is denied, you have the right to know the reasons and to appeal the decision in a higher court.",
    "Who can post bail on my behalf?": "A family member, friend, or bail bondsman can post bail on your behalf, depending on the court’s conditions.",
    "What is an undertrial prisoner?": "An undertrial prisoner is a person who has been accused of a crime but is awaiting trial and has not yet been convicted.",
    "Can bail be revoked?": "Yes, bail can be revoked if the accused violates the conditions set by the court or commits a new crime while on bail.",
    "What is anticipatory bail?": "Anticipatory bail is granted before arrest in anticipation of being accused of a crime, ensuring that the person won’t be taken into custody.",
    "What is interim bail?": "Interim bail is temporary bail granted until the court makes a final decision on a regular bail application.",
    "What factors do courts consider for bail?": "Courts consider factors such as the seriousness of the offense, the accused’s criminal record, and the likelihood of attending court when deciding bail.",
    "Can I be bailed for all offenses?": "Bail may not be granted for certain serious offenses, such as murder or terrorism-related charges, depending on the jurisdiction.",
    "What is the role of a bail bondsman?": "A bail bondsman provides the financial guarantee to the court for the defendant's release, charging a non-refundable fee, usually a percentage of the bail amount.",
    "How do courts decide bail amounts?": "Bail amounts are decided based on the severity of the crime, the accused’s financial situation, and flight risk, among other factors.",
    "What happens if I miss a court appearance while on bail?": "Missing a court appearance can result in a warrant for your arrest, and your bail may be forfeited or revoked.",
    "Can I change my bail conditions?": "You can apply to the court to have your bail conditions changed if your circumstances change or if the conditions are too restrictive.",
    "What is electronic monitoring on bail?": "Electronic monitoring is a condition where the accused wears an electronic device to ensure they remain within certain boundaries while on bail.",
    "Is there a limit on how long I can be held before getting bail?": "Yes, in most jurisdictions, there are legal time limits for holding an accused without bail, depending on the crime and court schedules.",
    "What is a bail hearing?": "A bail hearing is a court session where the judge decides whether to grant bail and what conditions to impose.",
    "What is a personal recognizance bond?": "A personal recognizance bond is when the accused is released on bail without financial security, based solely on their promise to return to court.",
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.trim();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, sender: 'user' },
      ]);
      setInput('');

      const botResponse = questionsAndAnswers[userMessage] || "I'm not sure how to respond to that.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot' },
      ]);
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button */}
      <button
        className="p-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition duration-300 ease-in-out"
        onClick={toggleChat}
      >
        <FontAwesomeIcon icon={faComments} size="lg" />
      </button>

      {/* Chatbot Popup */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden w-80 h-96 bg-white shadow-lg rounded-lg mt-2 flex flex-col`}
      >
        {isOpen && (
          <>
            <div className="bg-purple-500 text-white text-center py-2 rounded-t-lg">
              Bail & Justice Bot
            </div>
            <div
              ref={chatBoxRef}
              className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 mb-3 max-w-[75%] rounded-lg shadow-md ${
                    msg.sender === 'bot'
                      ? 'bg-purple-100 text-purple-800 self-start'
                      : 'bg-blue-500 text-white self-end'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-gray-200 flex items-center">
              <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
