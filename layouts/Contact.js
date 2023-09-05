import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-12 lg:col-12">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <label className="form-label">ご依頼内容</label>
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="例：お名前"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">ご担当者名</label>
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="例：お名前"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">会社名</label>
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="例：株式会社 ◯◯"
                  required
                />
              </div>
              <div className="mb-3">
              <label className="form-label">メールアドレス</label>
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="例：email@kosagi.co.jp"
                  required
                />
              </div>
              <div className="mb-3">
              <label className="form-label">お問い合わせ内容</label>
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="例：ご依頼内容をご記入ください。"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                確認画面へ
              </button>
            </form>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Contact;
