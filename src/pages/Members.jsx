function Members({ language }) {
  const mainMembers = [
    {
      position: "President",
      knPosition: "ಅಧ್ಯಕ್ಷರು",
      en: "Manoj Kumar",
      kn: "ಮನೋಜ್ ಕುಮಾರ್",
    },
    {
      position: "Vice President",
      knPosition: "ಉಪಾಧ್ಯಕ್ಷರು",
      en: "Harish Alwa Guddemane",
      kn: "ಹರೀಶ್ ಆಳ್ವ ಗುಡ್ಡೆಮನೆ",
    },
    {
      position: "Vice President",
      knPosition: "ಉಪಾಧ್ಯಕ್ಷರು",
      en: "Sudhakar Shetty Achukodi",
      kn: "ಸುಧಾಕರ್ ಶೆಟ್ಟಿ ಅಚುಕೋಡಿ",
    },
    {
      position: "Secretary",
      knPosition: "ಕಾರ್ಯದರ್ಶಿ",
      en: "Dinesh Bangera",
      kn: "ದಿನೇಶ್ ಬಂಗೇರ",
    },
    {
      position: "Joint Secretary",
      knPosition: "ಜೊತೆ ಕಾರ್ಯದರ್ಶಿ",
      en: "Prasad Bhandari",
      kn: "ಪ್ರಸಾದ್ ಭಂಡಾರಿ",
    },
    {
      position: "Treasurer",
      knPosition: "ಕೋಶಾಧಿಕಾರಿ",
      en: "Dinesh Kumar",
      kn: "ದಿನೇಶ್ ಕುಮಾರ್",
    },
    {
      position: "Joint Treasurer",
      knPosition: "ಜೊತೆ ಕೋಶಾಧಿಕಾರಿ",
      en: "Rajesh Kundar",
      kn: "ರಾಜೇಶ್ ಕುಂದರ್",
    },
  ];

  const executiveMembers = [
    { en: "Dinesh Poojary", kn: "ದಿನೇಶ್ ಪೂಜಾರಿ" },
    { en: "Jagadish Shetty", kn: "ಜಗದೀಶ್ ಶೆಟ್ಟಿ" },
    { en: "Narayana Bhatra Kumar", kn: "ನಾರಾಯಣ ಭಟ್ರ ಕುಮಾರ್" },
    { en: "Yogesh", kn: "ಯೋಗೇಶ್" },
    { en: "Ramesh Hegde Guddemane", kn: "ರಮೇಶ್ ಹೆಗ್ಡೆ ಗುಡ್ಡೆಮನೆ" },
    { en: "Santosh Shetty", kn: "ಸಂತೋಷ್ ಶೆಟ್ಟಿ" },
    { en: "Shashidhar Shetty", kn: "ಶಶಿಧರ್ ಶೆಟ್ಟಿ" },
    { en: "Yashwant Kothari", kn: "ಯಶವಂತ್ ಕೊಟ್ಟಾರಿ" },
    { en: "Saurabh Amin", kn: "ಸೌರಭ್ ಅಮೀನ್" },
    { en: "Vasant Devadiga", kn: "ವಸಂತ್ ದೇವಾಡಿಗ" },
    { en: "Naveen Kampakodi", kn: "ನವೀನ್ ಕಂಪಕೋಡಿ" },
    { en: "Harish Shetty", kn: "ಹರೀಶ್ ಶೆಟ್ಟಿ" },
    { en: "Dinakar", kn: "ದಿನಕರ್" },
    { en: "Raghuveer Mohili", kn: "ರಘುವೀರ್ ಮೊಹಿಲಿ" },
    { en: "Gopal Devadga", kn: "ಗೋಪಾಲ್ ದೇವಾಡಿಗ" },
    { en: "Divakar Shetty", kn: "ದಿವಾಕರ್ ಶೆಟ್ಟಿ" },
    { en: "Dinesh Poojary Mestry", kn: "ದಿನೇಶ್ ಪೂಜಾರಿ ಮೇಸ್ತ್ರಿ" },
    { en: "Prashant Kumar", kn: "ಪ್ರಶಾಂತ್ ಕುಮಾರ್" },
    { en: "Harusha S Shetty", kn: "ಹರುಷಾ ಎಸ್. ಶೆಟ್ಟಿ" },
    { en: "Harinaakshi", kn: "ಹರಿಣಾಕ್ಷಿ" },
    { en: "Manjula Rai", kn: "ಮಂಜುಳಾ ರೈ" },
    { en: "Deeksha Dinesh", kn: "ದೀಕ್ಷಾ ದಿನೇಶ್" },
    { en: "Vinaya", kn: "ವಿನಯಾ" },
    { en: "Bhavya", kn: "ಭವ್ಯ" },
    { en: "Anitha", kn: "ಅನಿತಾ" },
    { en: "Sharada Dinakar", kn: "ಶಾರದಾ ದಿನಕರ್" },
    { en: "Usha Narayana", kn: "ಉಷಾ ನಾರಾಯಣ" },
    { en: "Hema", kn: "ಹೇಮಾ" },
    { en: "Asha", kn: "ಆಶಾ" },
    { en: "Daakshayani", kn: "ದಾಕ್ಷಾಯಣಿ" },
    { en: "Kavita Praveen", kn: "ಕವಿತಾ ಪ್ರವೀಣ್" },
    { en: "Shwetha", kn: "ಶ್ವೇತಾ" },
  ];

  return (
    <section id="members" className="section members">
      <div className="section-title">
        <p>
          {language === "en" ? "OUR MEMBERS" : "ನಮ್ಮ ಸದಸ್ಯರು"}
        </p>
        <h2>
          {language === "en"
            ? "Mandira Committee Members"
            : "ಮಂದಿರದ ಸಮಿತಿ ಸದಸ್ಯರು"}
        </h2>
      </div>

      {/* MAIN COMMITTEE */}

      {/* <div className="section-title member-group-title">
        <h2>
          {language === "en"
            ? "Main Committee Members"
            : "ಮುಖ್ಯ ಸಮಿತಿ ಸದಸ್ಯರು"}
        </h2>
      </div> */}

      <div className="member-grid main-member-grid">
        {mainMembers.map((member, index) => (
          <div className="member-card main-member-card" key={index}>
            <h3>
              {language === "en"
                ? member.position
                : member.knPosition}
            </h3>
            <p>
              {language === "en" ? member.en : member.kn}
            </p>
          </div>
        ))}
      </div>

      {/* EXECUTIVE COMMITTEE */}

      <div className="section-title member-group-title">
        <h2>
          {language === "en"
            ? "Executive Committee Members"
            : "ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ ಸದಸ್ಯರು"}
        </h2>
      </div>

      <div className="executive-member-list">
        {executiveMembers.map((member, index) => (
          <div className="executive-member-row" key={index}>
            <span className="executive-member-number">
              {index + 1}.
            </span>
            <span>
              {language === "en" ? member.en : member.kn}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Members;