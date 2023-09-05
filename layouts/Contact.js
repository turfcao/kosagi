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
              enctype="text/plain"
            >
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-last-name"
                  >
                    ご担当者名
                    <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                      必須
                    </text>
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="name"
                    type="text"
                    defaultValue=""
                    placeholder="例：お名前"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-last-name"
                  >
                    会社名
                    <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                      必須
                    </text>
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="company"
                    type="text"
                    defaultValue=""
                    placeholder="例：株式会社 ◯◯"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-last-name"
                  >
                    メールアドレス
                    <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                      必須
                    </text>
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="email"
                    type="email"
                    defaultValue=""
                    placeholder="例：email@kosagi.co.jp"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-last-name"
                  >
                    お問い合わせ内容
                    <text className="text-white bg-red-500 font-normal text-sm ml-2 p-0.5 rounded-md">
                      必須
                    </text>
                  </label>
                </div>
                <div className="md:w-2/3">
                  <textarea
                    className="bg-gray-200 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    rows="7"
                    name="content"
                    defaultValue=""
                    placeholder="例：ご依頼内容をご記入ください。"
                  />
                </div>
              </div>
              <div className="flex justify-center">

                <button
                  className={ 
                    "btn btn-primary py-3 lg:py-3 px-14 lg:px-14 font-bold rounded-3xl hover:shadow-teal-md transition-all outline-none"
                  }
                  type="submit"
                >
                  送信
                </button>

              </div>
            </form>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Contact;
