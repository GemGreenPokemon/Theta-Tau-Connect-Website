import React from 'react';

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="py-24 px-4 bg-white" id="terms">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-theta-red mb-8">Terms of Service for Theta Tau Connect</h1>
        <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service ("Terms") govern your access to and use of the Theta Tau Connect mobile application ("App"), operated by the Theta Tau Mu Delta Chapter at UC Merced ("we," "us," or "our"). Please read these Terms carefully before using the App.
            </p>
            <p className="text-gray-700">
              By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">2. App Purpose and Eligibility</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Purpose</h3>
            <p className="text-gray-700 mb-4">
              Theta Tau Connect is designed exclusively for members of the Theta Tau Mu Delta Chapter at the University of California, Merced. The App provides tools for tracking chapter requirements, event attendance, and chapter-related information.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Eligibility</h3>
            <p className="text-gray-700">
              You must be a current member of the Theta Tau Mu Delta Chapter at UC Merced to use this App. The App is password-protected, and access is restricted to authorized members only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">3. Account Registration and Security</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Google Sign-In</h3>
            <p className="text-gray-700 mb-4">
              The App requires you to sign in using your Google account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">3.2 Password Protection</h3>
            <p className="text-gray-700 mb-4">
              In addition to Google Sign-In, the App requires a password for access. You agree not to share this password with non-members or otherwise enable unauthorized access to the App.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">3.3 Account Security</h3>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and complete information when setting up your account</li>
              <li>Maintain and promptly update your account information</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Take responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">4. User Conduct</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Prohibited Activities</h3>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Use the App for any illegal purpose or in violation of any local, state, national, or international law</li>
              <li>Violate or infringe other people's rights</li>
              <li>Interfere with or disrupt the App or servers or networks connected to the App</li>
              <li>Attempt to gain unauthorized access to the App or other users' accounts</li>
              <li>Use the App in any manner that could damage, disable, overburden, or impair it</li>
              <li>Share access to the App with non-members of Theta Tau Mu Delta Chapter</li>
              <li>Modify, adapt, or hack the App or modify another website to falsely imply that it is associated with the App</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">4.2 Content Standards</h3>
            <p className="text-gray-700 mb-4">Any content you submit to the App must:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Be accurate (where facts are stated)</li>
              <li>Be genuinely held (where opinions are stated)</li>
              <li>Comply with applicable law</li>
              <li>Not be defamatory, obscene, offensive, hateful, or inflammatory</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">5. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">5.1 App Content</h3>
            <p className="text-gray-700 mb-4">
              The App and its original content, features, and functionality are owned by the Theta Tau Mu Delta Chapter at UC Merced and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">5.2 Limited License</h3>
            <p className="text-gray-700 mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for its intended purposes as a member of the Theta Tau Mu Delta Chapter at UC Merced.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">5.3 Restrictions</h3>
            <p className="text-gray-700 mb-4">You may not:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Copy, modify, or create derivative works based on the App</li>
              <li>Distribute, publicly display, publicly perform, or sublicense the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Remove any copyright or other proprietary notices from the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">6. Third-Party Services</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">6.1 Google Services</h3>
            <p className="text-gray-700 mb-4">
              The App integrates with Google services (Sign-In, Calendar, Forms, Sheets). Your use of these services is subject to Google's Terms of Service and Privacy Policy.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">6.2 Firebase</h3>
            <p className="text-gray-700 mb-4">
              The App uses Firebase for authentication, database storage, and notifications. Your use of Firebase through the App is subject to Google's Terms of Service and Privacy Policy.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">6.3 Third-Party Links</h3>
            <p className="text-gray-700">
              The App may contain links to third-party websites or services. We are not responsible for the content or practices of any third-party websites or services linked to from the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 uppercase font-medium">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 uppercase font-medium mt-4">
              WE DO NOT WARRANT THAT THE APP WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, OR THAT ANY ERRORS OR DEFECTS WILL BE CORRECTED.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 uppercase font-medium">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE THETA TAU MU DELTA CHAPTER AT UC MERCED BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA, OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE APP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">9. Indemnification</h2>
            <p className="text-gray-700">
              You agree to defend, indemnify, and hold harmless the Theta Tau Mu Delta Chapter at UC Merced, its officers, directors, members, and agents from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">10. Modifications to the App and Terms</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">10.1 App Modifications</h3>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or discontinue, temporarily or permanently, the App or any features or portions thereof without prior notice.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">10.2 Terms Modifications</h3>
            <p className="text-gray-700">
              We may revise these Terms from time to time. The most current version will always be posted on the App. By continuing to access or use the App after revisions become effective, you agree to be bound by the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">11. Termination</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">11.1 Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may terminate your use of the App at any time by uninstalling it from your device.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">11.2 Termination by Us</h3>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">11.3 Effect of Termination</h3>
            <p className="text-gray-700">
              Upon termination, your right to use the App will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">12. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">13. Dispute Resolution</h2>
            <p className="text-gray-700">
              Any dispute arising from or relating to the subject matter of these Terms shall be finally settled by arbitration in Merced County, California, using the English language in accordance with the Arbitration Rules and Procedures of the Judicial Arbitration and Mediation Services, Inc. ("JAMS") then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">14. Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">15. Entire Agreement</h2>
            <p className="text-gray-700">
              These Terms constitute the entire agreement between you and the Theta Tau Mu Delta Chapter at UC Merced regarding the App and supersede all prior and contemporaneous written or oral agreements between you and the Theta Tau Mu Delta Chapter at UC Merced.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="text-gray-700">
              <p>Theta Tau Mu Delta Chapter at UC Merced</p>
              <p>Email: <a href="mailto:emerald.nash96@gmail.com" className="text-theta-red hover:underline">emerald.nash96@gmail.com</a></p>
              <p>Address: 5200 Lake Rd, Merced, CA 95343</p>
            </div>
          </section>

          <p className="text-gray-700 font-medium mt-8">
            By using the App, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService; 