export default async function About() {
  return (
    <section className="flex items-center bg-stone-100 ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://clipart-library.com/2023/E-Commerce-Logo-PNG-Clipart-Background.png"
              alt=""
              className="z-40 object-cover w-full h-96 rounded-3xl mt-20"
            />
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
              About Us
            </h2>
            <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service. Purchases If you wish to purchase any product
              or service made available through the Service ("Purchase"), you
              may be asked to supply certain information relevant to your
              Purchase including, without limitation, your credit card number,
              the expiration date of your credit card, your billing address, and
              your shipping information. In certain cases, we may ask for
              additional informtation or documents to process your order. You
              represent and warrant that: (i) you have the legal right to use
              any credit card(s) or other payment method(s) in connection with
              any Purchase; and that (ii) the information you supply to us is
              true, correct and complete. By submitting such information, you
              grant us the right to provide the information to third parties for
              purposes of facilitating the completion of Purchases. We reserve
              the right to refuse or cancel your order at any time for certain
              reasons including but not limited to: product or service
              availability, errors in the description or price of the product or
              service, error in your order or other reasons. We reserve the
              right to refuse or cancel your order if fraud or an unauthorized
              or illegal transaction is suspected. In the event of a need for
              refund of any transaction conducted through a debit or credit
              card, the refund will be issued directly to the original method of
              payment. We do not offer cash refunds for transactions completed
              via debit or credit cards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
