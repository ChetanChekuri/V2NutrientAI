export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service & Disclaimer</h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="mb-4">
            The information provided by NutriAI ("we," "us," or "our") is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information provided.
          </p>
          <p className="mb-4">
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of our service or reliance on any information provided. Your use of our service and your reliance on any information is solely at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Medical Disclaimer</h2>
          <p className="mb-4">
            The information provided by NutriAI is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Never disregard professional medical advice or delay seeking it because of something you have read on this website</li>
            <li>If you think you may have a medical emergency, call your doctor or emergency services immediately</li>
            <li>We do not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p className="mb-4">
            By accessing and using NutriAI, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you should not use our service.
          </p>
          <h3 className="text-xl font-semibold mb-2">Use License</h3>
          <p className="mb-4">
            Permission is granted to temporarily access NutriAI for personal, non-commercial use only. This is the grant of a license, not a transfer of title.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            We respect your privacy and are committed to protecting your personal information. Any information you provide while using NutriAI will be handled in accordance with our Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
}