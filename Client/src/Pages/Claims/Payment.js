import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', cardDetails);
  };

  const styles = {
    container: {
      backgroundColor: '#f5f5f7',
      padding: '2rem',
      maxWidth: '600px',
      margin: '0 auto',
      borderRadius: '15px',
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)'
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    paymentOptions: {
      marginBottom: '1.5rem'
    },
    optionLabel: {
      display: 'block',
      marginBottom: '1rem',
      fontSize: '1rem',
      color: '#333'
    },
    creditCardForm: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    },
    cardPreview: {
      background: 'linear-gradient(135deg, #4f83cc, #f26a6a)',
      color: 'white',
      padding: '1rem',
      borderRadius: '10px',
      marginBottom: '1.5rem',
      position: 'relative'
    },
    cardHolderName: {
      fontSize: '1.2rem',
      margin: 0
    },
    cardNumber: {
      fontSize: '1.5rem',
      letterSpacing: '2px'
    },
    cardExpiryCvv: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '0.5rem'
    },
    formGroup: {
      marginBottom: '1.2rem'
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s'
    },
    inputFocus: {
      borderColor: '#ff7f57'
    },
    formRow: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    submitBtn: {
      backgroundColor: '#ff7f57',
      color: 'white',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      width: '100%',
      marginTop: '1rem',
      transition: 'background-color 0.3s'
    },
    submitBtnHover: {
      backgroundColor: '#e66f50'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Method</h2>
      {/* <div style={{textAlign:'center',marginBottom:'1.5rem',fontSize:'1.2rem'}}>
        Pay ${totalAmount}
      </div> */}
      <form onSubmit={handleSubmit}>
        <div style={styles.paymentOptions}>
          {['paypal', 'creditCard', 'razorpay', 'cheque'].map((method) => (
            <label style={styles.optionLabel} key={method}>
              <input 
                type="radio" 
                name="paymentMethod" 
                value={method} 
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />
              {method.charAt(0).toUpperCase() + method.slice(1)}
            </label>
          ))}
        </div>

        {paymentMethod === 'creditCard' && (
          <div style={styles.creditCardForm}>
            <div style={styles.cardPreview}>
              <h3 style={styles.cardHolderName}>{cardDetails.cardHolder || "Card Holder Name"}</h3>
              <div style={styles.cardNumber}>{cardDetails.cardNumber || "**** **** **** ****"}</div>
              <div style={styles.cardExpiryCvv}>
                <span>{cardDetails.expiryDate || "MM/YY"}</span>
                <span>{cardDetails.cvv ? `CVV: ${cardDetails.cvv}` : "CVV"}</span>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Card Holder Name</label>
              <input 
                type="text" 
                name="cardHolder" 
                value={cardDetails.cardHolder} 
                onChange={handleInputChange} 
                style={styles.input}
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Card Number</label>
              <input 
                type="text" 
                name="cardNumber" 
                value={cardDetails.cardNumber} 
                onChange={handleInputChange} 
                style={styles.input}
                required 
                maxLength={16}
              />
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Expiry Date</label>
                <input 
                  type="text" 
                  name="expiryDate" 
                  value={cardDetails.expiryDate} 
                  onChange={handleInputChange} 
                  style={styles.input}
                  required 
                  placeholder="MM/YY"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>CVV Code</label>
                <input 
                  type="password" 
                  name="cvv" 
                  value={cardDetails.cvv} 
                  onChange={handleInputChange} 
                  style={styles.input}
                  required 
                  maxLength={3}
                />
              </div>
            </div>

            <button type="submit" style={styles.submitBtn}>Pay</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Payment;
