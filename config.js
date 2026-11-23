/* mehdialavi.me — site settings. Edit only this file.
   WORKER_URL   : address of the Cloudflare Worker (worker/worker.js), e.g. "https://forms.mehdialavi.me"
   BOOKING_URL  : GoHighLevel calendar booking link for research interviews
   SURVEY_URLS  : link of each survey on the university-approved survey platform
   STUDY_INFO   : short participant information shown before the survey starts */
window.SITE_CONFIG = {
  WORKER_URL: "https://forms.mehdialavi.me",
  BOOKING_URL: "",
  SURVEY_URLS: {
    shared: "https://mehdialavi90.limesurvey.net/436178"
  },
  STUDY_INFO: {
    shared: {
      title: "EMS business decisions survey",
      purpose: "This survey is part of a doctoral research project at Széchenyi István University (Győr, Hungary). It asks how EMS, fitness, beauty and physiotherapy businesses choose partners, use financing and share risk with partners.",
      who: "Owners and managers of equipment-based service businesses.",
      time: "The expected duration is shown on the first page of the survey.",
      data: "Your answers are collected by the university-approved survey platform, not by this website. This website does not receive or store your answers.",
      ethics: "Approved by the Science Ethics Committee of Széchenyi István University on 18 September 2026.",
      contact: "alavi.seyed.mehdi@student.sze.hu"
    }
  }
};
