import React from "react";
import { SocialIcon } from "react-social-icons/component";

export default function footer() {
  return (
    <div className="flex flex-col  bg-rednew w-full px-24 pt-24 pb-12 max-md:px-10 justify-center item-center text-center z-40">
      <p className="flex font-poppins font-bold text-white text-2xl max-md:text-lg justify-center">
        This Website was made by Chulinxz, feel free to contact me
        anytime :D
      </p>
      <div className="pt-5 font-bold font-poppins text-xl items-center justify-center max-md:text-sm flex px-2 text-white">If you interseted in Digital Arts or wanna support my works you can contact me by Discord's ID or click the "Twitter" button below to send direct message to me!! Other Questions are allowed to ask too</div>
      <div className="mt-10"></div>
      <hr></hr>
      <div className="mt-10"></div>
      <div className="text-white max-md:text-xs">© Chulinx Folio, All Right Reserved | Implemented by Nextjs</div>
      {/* <div className="flex pt-10 justify-center">
        <div className="flex flex-row"> */}
        {/* ig icon */}
        {/* <a href="https://www.instagram.com/vyovyo___" target="_blank" className="px-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.1251 11.375C35.6306 11.375 35.1473 11.5216 34.7362 11.7963C34.325 12.0711 34.0046 12.4615 33.8154 12.9183C33.6262 13.3751 33.5767 13.8778 33.6731 14.3627C33.7696 14.8477 34.0077 15.2932 34.3573 15.6428C34.7069 15.9924 35.1524 16.2305 35.6374 16.327C36.1223 16.4234 36.625 16.3739 37.0818 16.1847C37.5386 15.9955 37.9291 15.6751 38.2038 15.2639C38.4785 14.8528 38.6251 14.3695 38.6251 13.875C38.6251 13.212 38.3617 12.5761 37.8928 12.1073C37.424 11.6384 36.7881 11.375 36.1251 11.375ZM45.7084 16.4167C45.6679 14.6881 45.3442 12.9779 44.7501 11.3542C44.2204 9.96488 43.3959 8.70685 42.3334 7.66669C41.3018 6.59882 40.0408 5.77955 38.6459 5.27085C37.0265 4.65869 35.3144 4.32754 33.5834 4.29169C31.3751 4.16669 30.6667 4.16669 25.0001 4.16669C19.3334 4.16669 18.6251 4.16669 16.4167 4.29169C14.6858 4.32754 12.9737 4.65869 11.3542 5.27085C9.96191 5.7847 8.70203 6.60327 7.66675 7.66669C6.59889 8.69831 5.77962 9.95927 5.27091 11.3542C4.65875 12.9737 4.3276 14.6858 4.29175 16.4167C4.16675 18.625 4.16675 19.3334 4.16675 25C4.16675 30.6667 4.16675 31.375 4.29175 33.5834C4.3276 35.3143 4.65875 37.0264 5.27091 38.6459C5.77962 40.0408 6.59889 41.3017 7.66675 42.3334C8.70203 43.3968 9.96191 44.2153 11.3542 44.7292C12.9737 45.3414 14.6858 45.6725 16.4167 45.7084C18.6251 45.8334 19.3334 45.8334 25.0001 45.8334C30.6667 45.8334 31.3751 45.8334 33.5834 45.7084C35.3144 45.6725 37.0265 45.3414 38.6459 44.7292C40.0408 44.2205 41.3018 43.4012 42.3334 42.3334C43.4006 41.2971 44.2258 40.0379 44.7501 38.6459C45.3442 37.0221 45.6679 35.3119 45.7084 33.5834C45.7084 31.375 45.8334 30.6667 45.8334 25C45.8334 19.3334 45.8334 18.625 45.7084 16.4167ZM41.9584 33.3334C41.9432 34.6558 41.7037 35.9661 41.2501 37.2084C40.9174 38.115 40.3832 38.9342 39.6876 39.6042C39.0118 40.2927 38.1943 40.8259 37.2917 41.1667C36.0495 41.6203 34.7392 41.8599 33.4168 41.875C31.3334 41.9792 30.5626 42 25.0834 42C19.6042 42 18.8334 42 16.7501 41.875C15.3769 41.9007 14.0097 41.6893 12.7084 41.25C11.8455 40.8918 11.0654 40.36 10.4167 39.6875C9.72527 39.0182 9.19767 38.1983 8.87508 37.2917C8.36645 36.0316 8.08434 34.6916 8.04175 33.3334C8.04175 31.25 7.91675 30.4792 7.91675 25C7.91675 19.5209 7.91675 18.75 8.04175 16.6667C8.05109 15.3147 8.29789 13.9749 8.77092 12.7084C9.13768 11.829 9.70063 11.0451 10.4167 10.4167C11.0497 9.70037 11.8319 9.13147 12.7084 8.75002C13.9783 8.29178 15.3167 8.05227 16.6667 8.04169C18.7501 8.04169 19.5209 7.91669 25.0001 7.91669C30.4792 7.91669 31.2501 7.91669 33.3334 8.04169C34.6559 8.05686 35.9661 8.29637 37.2084 8.75002C38.1551 9.10138 39.0049 9.67262 39.6876 10.4167C40.3703 11.0566 40.9038 11.839 41.2501 12.7084C41.7131 13.977 41.9528 15.3162 41.9584 16.6667C42.0626 18.75 42.0834 19.5209 42.0834 25C42.0834 30.4792 42.0626 31.25 41.9584 33.3334ZM25.0001 14.3125C22.8872 14.3166 20.8229 14.9469 19.0681 16.1238C17.3133 17.3007 15.9467 18.9713 15.141 20.9245C14.3353 22.8778 14.1266 25.026 14.5413 27.0978C14.956 29.1696 15.9756 31.072 17.4711 32.5646C18.9666 34.0572 20.8709 35.073 22.9435 35.4837C25.0161 35.8944 27.164 35.6815 29.1156 34.872C31.0673 34.0625 32.7352 32.6926 33.9087 30.9355C35.0821 29.1784 35.7084 27.1129 35.7084 25C35.7112 23.594 35.4359 22.2013 34.8985 20.902C34.3611 19.6027 33.5721 18.4225 32.5769 17.4293C31.5817 16.436 30.4 15.6494 29.0997 15.1145C27.7993 14.5796 26.4061 14.307 25.0001 14.3125ZM25.0001 31.9375C23.628 31.9375 22.2867 31.5306 21.1458 30.7683C20.0049 30.006 19.1158 28.9226 18.5907 27.6549C18.0656 26.3872 17.9282 24.9923 18.1959 23.6466C18.4636 22.3008 19.1243 21.0647 20.0945 20.0945C21.0648 19.1242 22.3009 18.4635 23.6466 18.1958C24.9924 17.9281 26.3873 18.0655 27.6549 18.5906C28.9226 19.1157 30.0061 20.0049 30.7684 21.1458C31.5307 22.2866 31.9376 23.6279 31.9376 25C31.9376 25.9111 31.7581 26.8132 31.4095 27.6549C31.0609 28.4966 30.5498 29.2614 29.9056 29.9056C29.2614 30.5498 28.4966 31.0608 27.6549 31.4094C26.8133 31.7581 25.9111 31.9375 25.0001 31.9375Z"
              fill="url(#paint0_linear_29_131)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_29_131"
                x1="25.0001"
                y1="4.16669"
                x2="25.0001"
                y2="45.8334"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BE6C6C" />
                <stop
                  offset="0.9999"
                  stop-color="#DF5656"
                  stop-opacity="0.322917"
                />
                <stop offset="1" stop-color="#BE6C6C" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          </a> */}
          {/* githubIcon */}
          {/* <a href="https://github.com/Chulinuwu" target="_blank" className="px-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.2 7.7475C50.3675 5.915 48.1625 5 45.5825 5H14.365C11.785 5 9.58 5.915 7.7475 7.7475C5.915 9.58 5 11.785 5 14.365V45.5825C5 48.1625 5.915 50.3675 7.7475 52.2C9.58 54.0325 11.785 54.9475 14.365 54.9475H21.65C22.125 54.9475 22.4825 54.93 22.7225 54.8975C23.0017 54.8415 23.2538 54.6926 23.4375 54.475C23.675 54.225 23.795 53.8625 23.795 53.3875L23.7775 51.175C23.7675 49.765 23.7625 48.65 23.7625 47.825L23.0125 47.955C22.5375 48.0425 21.9375 48.08 21.21 48.07C20.4517 48.056 19.6959 47.9799 18.95 47.8425C18.156 47.6959 17.4086 47.3616 16.77 46.8675C16.1012 46.3616 15.6024 45.664 15.34 44.8675L15.015 44.1175C14.7411 43.5259 14.3969 42.9694 13.99 42.46C13.525 41.8525 13.0525 41.4425 12.575 41.225L12.35 41.0625C12.1931 40.9501 12.0504 40.8192 11.925 40.6725C11.8052 40.5364 11.7066 40.383 11.6325 40.2175C11.5675 40.065 11.6225 39.94 11.795 39.8425C11.97 39.7425 12.2825 39.695 12.74 39.695L13.39 39.795C13.8225 39.88 14.36 40.14 14.9975 40.5725C15.6427 41.0123 16.1816 41.5905 16.575 42.265C17.075 43.1525 17.675 43.83 18.38 44.2975C19.085 44.7625 19.795 44.9975 20.51 44.9975C21.225 44.9975 21.8425 44.9425 22.365 44.835C22.8703 44.7305 23.3613 44.566 23.8275 44.345C24.0225 42.895 24.5525 41.775 25.42 40.995C24.2959 40.8848 23.1819 40.6892 22.0875 40.41C21.0195 40.1166 19.9923 39.6908 19.03 39.1425C18.0231 38.5943 17.1338 37.8536 16.4125 36.9625C15.72 36.095 15.15 34.9575 14.705 33.55C14.2625 32.14 14.04 30.5125 14.04 28.67C14.04 26.0475 14.895 23.815 16.6075 21.97C15.8075 20 15.8825 17.7875 16.835 15.34C17.465 15.1425 18.3975 15.29 19.6325 15.7775C20.8675 16.265 21.7725 16.6825 22.3475 17.0275C22.9225 17.3775 23.3825 17.67 23.73 17.9075C25.7624 17.3419 27.8628 17.0576 29.9725 17.0625C32.12 17.0625 34.2 17.345 36.2175 17.9075L37.4525 17.1275C38.4025 16.5571 39.4045 16.0783 40.445 15.6975C41.595 15.2625 42.47 15.145 43.08 15.34C44.055 17.79 44.14 20 43.3375 21.9725C45.05 23.815 45.9075 26.0475 45.9075 28.6725C45.9075 30.515 45.685 32.1475 45.24 33.565C44.7975 34.985 44.2225 36.1225 43.5175 36.98C42.7835 37.8597 41.8905 38.5933 40.885 39.1425C39.835 39.7275 38.815 40.15 37.8275 40.41C36.7332 40.6901 35.6191 40.8865 34.495 40.9975C35.62 41.9725 36.185 43.51 36.185 45.6125V53.3875C36.185 53.755 36.2375 54.0525 36.3475 54.28C36.3981 54.3896 36.4702 54.4879 36.5595 54.5691C36.6488 54.6503 36.7536 54.7126 36.8675 54.7525C37.1075 54.8375 37.3175 54.8925 37.5025 54.9125C37.6875 54.9375 37.9525 54.945 38.2975 54.945H45.5825C48.1625 54.945 50.3675 54.03 52.2 52.1975C54.03 50.3675 54.9475 48.16 54.9475 45.58V14.365C54.9475 11.785 54.0325 9.58 52.2 7.7475Z"
              fill="black"
            />
          </svg>
          </a> */}

         
        {/* </div>
      
      </div> */}
    </div>
  );
}
