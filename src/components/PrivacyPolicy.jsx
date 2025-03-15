import React from 'react';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="py-24 px-4 bg-white" id="privacy">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-theta-red mb-8">Privacy Policy for Theta Tau Connect</h1>
        <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy explains how the Theta Tau Mu Delta Chapter at UC Merced ("we," "our," or "us") collects, uses, and shares information about you when you use our Theta Tau Connect app ("App"). This policy applies to all users of the App and describes our data practices and your rights regarding your personal information.
            </p>
            <p className="text-gray-700">
              This App is exclusively for use by members of the Theta Tau Mu Delta Chapter fraternity at the University of California, Merced. By using the App, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Information You Provide to Us</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Account Information:</strong> When you sign in with Google, we collect your name, email address, and profile picture from your Google account.</li>
              <li><strong>Authentication Information:</strong> A password is required to access the App, ensuring only Theta Tau Mu Delta Chapter members at UC Merced can use the App.</li>
              <li><strong>Profile Information:</strong> Additional information you provide in your profile, such as pledge class, major, and committee memberships.</li>
              <li><strong>Event Attendance:</strong> Information about which Theta Tau events you attend and check into.</li>
              <li><strong>Requirements Data:</strong> Information about your progress toward chapter requirements, including community service hours, professional development events, and social events.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide, maintain, and improve the App</li>
              <li>Authenticate your identity and maintain your account</li>
              <li>Track your progress toward chapter requirements</li>
              <li>Facilitate event check-ins and attendance tracking</li>
              <li>Send notifications about events and announcements</li>
              <li>Troubleshoot issues and respond to user support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">How We Share Your Information</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Within the Chapter</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Chapter Leadership:</strong> The Regent, Vice Regent, and E-Board members may have access to attendance records and requirements progress at the Regent's discretion.</li>
              <li><strong>Other Members:</strong> Limited profile information may be visible to other chapter members.</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">With Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Google Services:</strong> The App integrates with Google services (Sign-In, Calendar, Forms, Sheets) and shares necessary information with these services to provide functionality. These services are governed by Google's Privacy Policy.</li>
              <li><strong>Google Apps Script:</strong> We use Google Apps Script to facilitate form integration for attendance tracking. In some cases, we create new Google Forms with Apps Script attached to them. These scripts connect to our Firebase database to upload attendance data. All data processed through Apps Script is subject to Google's Privacy Policy.</li>
              <li><strong>Firebase:</strong> We use Firebase for authentication, database storage, and notifications. Information stored in Firebase is subject to Google's Privacy Policy.</li>
              <li><strong>Service Providers:</strong> We may share information with service providers who help us operate the App, such as cloud storage providers.</li>
            </ul>
            <p className="text-gray-700">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              Your personal information is fully secure with us. As an app exclusively for Theta Tau Mu Delta Chapter members, access is strictly limited to our local chapter members only. The app employs robust password protection and secure authentication systems to ensure only authorized members can access it.
            </p>
            <p className="text-gray-700">
              Our database is secured with industry-standard protections, and we maintain strict access controls. We're committed to preserving the integrity and confidentiality of your information within our close-knit fraternity community. With our limited user base and focused purpose, we're able to provide a high level of security and oversight for all data within the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">Your Rights and Choices</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access and Update:</strong> You can access and update your profile information through the App's profile settings.</li>
              <li><strong>Notifications:</strong> You can manage notification preferences in the App settings.</li>
              <li><strong>Account Deletion:</strong> To request deletion of your account and associated data, contact the App administrator (see Contact Information below).</li>
              <li><strong>Data Export:</strong> To request a copy of your data, contact the App administrator.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">Data Retention</h2>
            <p className="text-gray-700">
              We retain your information for as long as necessary to provide the App's services and fulfill the purposes outlined in this Privacy Policy. When you request account deletion, we will delete or anonymize your information, unless we need to retain certain information for legitimate business or legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">Third-Party Links and Services</h2>
            <p className="text-gray-700">
              The App may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">California Privacy Rights</h2>
            <p className="text-gray-700">
              If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA). For more information about these rights or to exercise them, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact:
            </p>
            <div className="text-gray-700">
              <p>Theta Tau Mu Delta Chapter at UC Merced</p>
              <p>Email: <a href="mailto:emerald.nash96@gmail.com" className="text-theta-red hover:underline">emerald.nash96@gmail.com</a></p>
              <p>Address: 5200 Lake Rd, Merced, CA 95343</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theta-red mb-4">App-Specific Provisions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>University Fraternity App:</strong> This App is exclusively for use by members of the Theta Tau Mu Delta Chapter fraternity at the University of California, Merced, and is password-protected to ensure only authorized members can access it.</li>
              <li><strong>Google Sign-In:</strong> The App uses Google Sign-In for authentication. Only accounts with access to Theta Tau materials will work with the App.</li>
              <li><strong>Google Sheets Integration:</strong> The App integrates with Google Sheets to track requirements. Data is synchronized between the App and Google Sheets.</li>
              <li><strong>Google Forms & Apps Script:</strong> The App includes a form integration feature that helps track attendance. In some cases, we create new Google Forms with Apps Script attached to them. These scripts externally connect to our Firebase database to upload attendance data.</li>
            </ul>
          </section>

          <p className="text-gray-700 font-medium mt-8">
            By using the App, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 