import React, { useState } from "react";
import Imagepromotion from "../../assets/images/mostread.png";
import "./Style.css";

const Faqsection = () => {
  const FAQToggle = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <div className={`faq-toggle ${isOpen ? "open" : ""}`}>
          <div className="btn-title">
            <button
              className="toggle-button p-0 fs-3 fw-100"
              onClick={toggleFAQ}
            >
              {isOpen ? "-" : "+"}
            </button>

            <div className="question" onClick={toggleFAQ}>
              {question}
            </div>
          </div>
          {isOpen && (
            <div className="answer p-4">
              <p>{answer}</p>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 p-0">
          <img
            src={Imagepromotion}
            alt="most read"
            className="img-fluid w-100 ms-3"
          />
        </div>
        <div className="col-md-7 mt-4 mt-md-0 ml-3 d-flex justify-content-end ml-md-0 pe-md-5 p-0">
          <div className="w-100 pe-md-3">
            <div className="faq-title fw-bold">الأكثر قراءة</div>
            <FAQToggle
              question="ما هي أهمية متابعة الأخبار؟"
              answer="تتيح متابعة الأخبار للأفراد فهم الأحداث الحالية في العالم وفي بلدهم. يمكنهم البقاء على اطلاع بأحدث المستجدات الاقتصادية والسياسية والاجتماعية، مما يمكنهم من اتخاذ قرارات أفضل في حياتهم اليومية."
            />
            <FAQToggle
              question="كيف يمكنني التحقق من صحة الأخبار التي أقرأها؟"
              answer="يفضل دائمًا التحقق من مصداقية المصادر والأخبار من خلال مواقع إخبارية موثوقة. قم بالتحقق من عدة مصادر مستقلة لضمان دقة المعلومات وتجنب نشر الأخبار غير المؤكدة."
            />
            <FAQToggle
              question="ما هي أبرز التطورات السياسية في المنطقة؟"
              answer="تختلف التطورات السياسية باستمرار، ولكن يمكن أن تتضمن بعض المواضيع المهمة مثل الانتخابات، النزاعات الدولية، والتغييرات في الحكومات. يفضل متابعة الأخبار السياسية لفهم السياق وتأثيرها."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqsection;
