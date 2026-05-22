import React from "react";

function DisclaimerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content disclaimer-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close disclaimer"
        >
          ✕
        </button>

        <div className="disclaimer-header">
          <h2>महत्वपूर्ण सूचना / Important Notice</h2>
        </div>

        <div className="disclaimer-content nepali-text">
          <p className="disclaimer-title">
            तल दिईएको नम्बरमा सम्पर्क गर्नु पुर्व ध्यानमा राख्नुपर्ने केहि महत्वपूर्ण कुराहरु :
          </p>

          <ul className="disclaimer-list">
            <li>
              रक्तदानको लागि कोहि पनि व्यक्तिलाई सम्पर्क गर्नुपुर्व आवश्यकताको विस्तृत विवरण बुझ्नुहुन र पहिले
              Blood Bank हरुमा रगतको लागि प्रयास गरेर त्यहाँबाट समाधान नभएको खण्डमामात्र तल दिईएका फोन नंहरुमा
              सम्पर्क गर्नुहुन अनुरोध छ ।
            </li>

            <li>
              रक्तदान पुर्णरुपमा स्वेईच्छाले गरिने विषय भएकाले कृपया कसैलाई रक्तदानको लागि दबाब नदिनुहुन अनुरोध
              छ ।
            </li>

            <li>
              रक्तादाताले केहि समय अघिमात्रै रक्तदान गरेको वा शारिरिक / मानसिक अस्वस्थताले त्यसबखत रक्तदान गर्न
              ईच्छुक नभएमा त्यस कुरालाई सहज रुपमा लिईदिनुहुन अनुरोध छ ।
            </li>

            <li>
              कोहि पनि व्यक्ति रक्तदान गर्न ईच्छुक भएको अवस्थामा आवात जावातमा केहि समस्या भए मिलेसम्मको
              अवस्थामा त्यसको व्यवस्था गर्न वा अरु केहि पनि समस्या भए त्यतातर्फ पनि ध्यान दिनुहुँन अनुरोध छ ।
            </li>

            <li>
              कुनै फोन नम्बरमा फोन गर्दा फोन नउठेको अवस्थामा बारम्बार फोन नगर्नुहुन तर, अत्यावश्यक भएको अवस्थामा
              विवरण सहित सन्देश छोडिदिन सक्नुहुनेछ ।
            </li>

            <li>
              अन्ततः यहाँ उपलब्ध विवरणहरु रक्तपुर्ति बाहेकका कुनैपनि प्रायोजनका निमित्त प्रयोग नगर्नुहुन सम्पूर्णमा
              अनुरोध छ ।
            </li>
          </ul>

          <p className="disclaimer-footer">धन्यवाद ।</p>
        </div>

        <div className="disclaimer-actions">
          <button className="btn-disclaimer-agree" onClick={onClose}>
            मैले बुझें / I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerModal;
