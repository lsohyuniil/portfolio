import React, { ChangeEvent, FormEvent, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID as string;
const TRMPLATE_ID = process.env.REACT_APP_TRMPLATE_ID as string;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY as string;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        SERVICE_ID, //service_id
        TRMPLATE_ID, // template_id
        formData, // 폼요소
        PUBLIC_KEY // public_key
      )
      .then(
        () => {
          alert(
            "👍 메일이 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다."
          );
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          // console.log("메일 보내기 실패", error.text);
          alert(
            "❌ 메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." +
              error.text
          );
        }
      );
  };

  return (
    <div className="main contact" id="contact">
      <div className="content-inner">
        <SectionTitle title="Contact Me" subTitle="언제든 편하게 연락주세요." />
        <div className="contact-wrap">
          <div>
            <form onSubmit={handleSubmit}>
              <p>
                <input
                  name="name"
                  value={formData.name}
                  type="text"
                  placeholder="성함을 입력해 주세요."
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  name="email"
                  value={formData.email}
                  type="email"
                  placeholder="이메일을 입력해 주세요."
                  onChange={handleChange}
                />
              </p>
              <p>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="메세지를 입력해 주세요."
                  onChange={handleChange}
                />
              </p>
              <button>전송</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
