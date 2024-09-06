const departmentAdvisoryBoard = [
    {
      name: "Er. Rijo Thomas Jose",
      role: "MANAGEMENT REPRESENTATIVE",
      position: "CEO, St. Thomas College of Engineering",
      location: "Sivapuram, Mattanur, Kannur"
    },
    {
      name: "Dr. Shinu Mathew John",
      role: "CHAIRMAN",
      position: "Principal, St. Thomas College of Engineering",
      location: "Sivapuram, Mattanur, Kannur"
    },
    {
      name: "Prof. Thomas Varghese",
      role: "ACADEMIC MEMBER",
      position: "Associate Professor, Dept. of IT, Amal Jyothi College of Engineering, Kottayam",
      email: "thomasvarghese@amaljyothi.ac.in"
    },
    {
      name: "Dr. N S Sreekanth",
      role: "ACADEMIC MEMBER",
      position: "Associate Professor & Head, Dept of Information Technology, Kannur University",
      email: "nssreekanth@kannuruniv.ac.in"
    },
    {
      name: "Mrs. Amitha I C",
      role: "CONVENER",
      position: "Assistant Professor / H.O.D, CSE, St. Thomas College of Engineering",
      location: "Sivapuram, Mattanur, Kannur",
      email: "hodcs@stthomaskannur.ac.in"
    },
    {
      name: "Mrs. Dinla O K",
      role: "CO-CONVENER",
      position: "Assistant Professor, CSE, St. Thomas College of Engineering",
      location: "Sivapuram, Mattanur, Kannur",
      email: "dinlaok@stthomaskannur.ac.in",
      phone: "9744093662"
    },
    {
      name: "Mr. Deepaklal K B",
      role: "INDUSTRY EXPERT",
      position: "Team Lead, IExceed Technology Solutions, Bangalore",
      email: "iam@deepaklal.online",
      phone: "8547580055"
    },
    {
      name: "Mrs. Salini S S",
      role: "INDUSTRY EXPERT",
      position: "Project Manager, Cognizant Technology Solutions, Infopark, Kochi",
      email: "salinisasi@gmail.com"
    },
    {
      name: "Mr. Sreerag M M",
      role: "ALUMNI",
      position: "Software Engineer, Experion Technologies (India) Private Ltd., Infopark SEZ, Kakkanad, Kochi",
      email: "sreeragmmundayadan@gmail.com",
      phone: "7559800294"
    }
  ];
  
  const programAssessmentCommittee = [
    { name: "Prof. Amitha I C", role: "Chairperson", position: "HOD CSE Dept" },
    { name: "Prof. Nithin C", role: "Member", position: "HOD ECE Dept" },
    { name: "Prof. Madhu K", role: "Member", position: "Assistant Professor CSE Dept" },
    { name: "Prof. Jithin S", role: "Member", position: "Assistant Professor CSE Dept" },
    { name: "Prof. Anu C", role: "Member", position: "Assistant Professor CSE Dept" },
    { name: "Prof. Anjali PP", role: "Member", position: "Assistant Professor ASH Dept" }
  ];
  
  const majorRecruiters = [
    "Central and State Govts", "Wipro", "TCS", "UST Global", "CTS", "HCL", "Alliance Corn Hill"
  ];
  
  const specialInterestGroups = [
    {
      name: "Machine learning & Artificial Intelligence",
      promoters: ["Asst. Prof. Madhu K", "Asst. Prof. Amitha I C", "Asst. Prof. Dinla O K"]
    },
    {
      name: "Computer Networks and Security",
      promoters: ["Asst. Prof. Jithin S", "Asst. Prof. Anu C", "Asst. Prof. Saritha Narayanan", "Asst. Prof. Sreerekha K P"]
    }
  ];
  
  const subjects = [
    { name: "Distributed Computing", code: "CST402" },
    { name: "Industrial Safety Engineering", code: "MCN401" },
    { name: "Artificial Intelligence", code: "CST401" },
    { name: "Comprehensive Course Work", code: "CST308" },
    { name: "Industrial Economics And Foreign Trade", code: "HUT300" },
    { name: "Algorithm Analysis And Design", code: "CST306" },
    { name: "Computer Graphics And Image Processing", code: "CST304" },
    { name: "Compiler Design", code: "CST302" },
    { name: "Disaster Management", code: "MCN301" },
    { name: "Management Of Software Systems", code: "CST309" },
    { name: "Microprocessors And Microcontrollers", code: "CST307" },
    { name: "System Software", code: "CST305" },
    { name: "Computer Networks", code: "CST303" },
    { name: "Formal Languages And Automata Theory", code: "CST301" },
    { name: "Constitution Of India", code: "MCN202" },
    { name: "Professional Ethics", code: "HUT200" },
    { name: "Design And Engineering", code: "EST200" },
    { name: "Operating Systems", code: "CST206" },
    { name: "Database Management Systems", code: "CST204" },
    { name: "Computer Organisation And Architecture", code: "CST202" },
    { name: "Graph Theory", code: "MAT206" },
    { name: "Sustainable Engineering", code: "MCN201" },
    { name: "Professional Ethics", code: "HUT200" },
    { name: "Design And Engineering", code: "EST200" },
    { name: "Object Oriented Programming Using Java", code: "CST205" },
    { name: "Logic System Design", code: "CST203" },
    { name: "Data Structures", code: "CST201" },
    { name: "Discrete Mathematical Structures", code: "MAT203" }
  ];
  
  export const faculties = [
    {
      name: "Dr. Shinu Mathew John",
      position: "Professor",
      phone: "9367926966",
      email: "principal@stthomaskannur.ac.in",
      dateOfJoining: "09/01/2015",
      moreInfo: "Click to Know More",
      image: "path/to/shinu_mathew_john.jpg"
    },
    {
      name: "Dr. Amitha I C",
      position: "HOD",
      phone: "0490 2401702",
      email: "amithaic@gmail.com",
      dateOfJoining: "07/07/2022",
      moreInfo: "Click to Know More",
      image: "path/to/amitha_ic.jpg"
    },
    {
      name: "Mr. Madhu K",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "madhuk@stthomaskannur.ac.in",
      dateOfJoining: "20/07/2015",
      moreInfo: "Click to Know More",
      image: "path/to/madhu_k.jpg"
    },
    {
      name: "Mr. Jithin S",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "jithinsubhash@stthomaskannur.ac.in",
      dateOfJoining: "01/01/2018",
      moreInfo: "Click to Know More",
      image: "path/to/jithin_s.jpg"
    },
    {
      name: "Ms. Anu C",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "anuc@stthomaskannur.ac.in",
      dateOfJoining: "13/06/2018",
      moreInfo: "Click to Know More",
      image: "path/to/anu_c.jpg"
    },
    {
      name: "Ms. Dinla O K",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "dinlaok@stthomaskannur.ac.in",
      dateOfJoining: "01/11/2021",
      moreInfo: "Click to Know More",
      image: "path/to/dinla_ok.jpg"
    },
    {
      name: "Ms. Sreerekha K P",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "sreerekha@stthomaskannur.ac.in",
      dateOfJoining: "08/08/2022",
      moreInfo: "Click to Know More",
      image: "path/to/sreerekha_kp.jpg"
    },
    {
      name: "Ms. Saritha Narayanan",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "sarithanarayanan@stthomaskannur.ac.in",
      dateOfJoining: "10/08/2022",
      moreInfo: "Click to Know More",
      image: "path/to/saritha_narayanan.jpg"
    },
    {
      name: "Ms. Jithika M",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "jithika@stthomaskannur.ac.in",
      dateOfJoining: "03/01/2023",
      moreInfo: "Click to Know More",
      image: "path/to/jithika_m.jpg"
    },
    {
      name: "Ms. Anju G",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "anju@stthomaskannur.ac.in",
      dateOfJoining: "30/01/2023",
      moreInfo: "Click to Know More",
      image: "path/to/anju_g.jpg"
    },
    {
      name: "Ms. Vaishakhi V K",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "vaishakhi@stthomaskannur.ac.in",
      dateOfJoining: "06/03/2023",
      moreInfo: "Click to Know More",
      image: "path/to/vaishakhi_vk.jpg"
    },
    {
      name: "Ms. Ashwathy Nainesh",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "ashwathy@stthomaskannur.ac.in",
      dateOfJoining: "14/08/2023",
      moreInfo: "Click to Know More",
      image: "path/to/ashwathy_nainesh.jpg"
    },
    {
      name: "Ms. Remya P V",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "remya@stthomaskannur.ac.in",
      dateOfJoining: "13/11/2023",
      moreInfo: "Click to Know More",
      image: "path/to/remya_pv.jpg"
    },
    {
      name: "Ms. Aswathy Kutty P",
      position: "Assistant Professor",
      phone: "0490 2401702",
      email: "aswathy@stthomaskannur.ac.in",
      dateOfJoining: "29/01/2024",
      moreInfo: "Click to Know More",
      image: "path/to/aswathy_kutty_p.jpg"
    },
    {
      name: "Ms. Anjana K.P",
      position: "Assistant Professor",
      phone: "8891233144",
      email: "anjana@stthomaskannur.ac.in",
      dateOfJoining: "06/06/2024",
      moreInfo: "Click to Know More",
      image: "path/to/anjana_kp.jpg"
    },
    {
      name: "Ms. Rinija G N",
      position: "Assistant Professor",
      phone: "7306638687",
      email: "rinija@stthomaskannur.ac.in",
      dateOfJoining: "19/06/2024",
      moreInfo: "Click to Know More",
      image: "path/to/rinija_gn.jpg"
    }
  ];
  
  
  const labInstructors = [
    { name: "Mr. Gopakumar M C", position: "Lab Instructor" },
    { name: "Mr. AMAL CHERIYAN", position: "Lab Instructor" },
    { name: "Mr. VIKAS KUMAR P", position: "Lab Instructor" }
  ];
  
  export const labs = [
    { name: "C PROGRAMMING LAB" },
    { name: "DATA STRUCTURES LAB" },
    { name: "OBJECT ORIENTED PROGRAMMING LAB (IN JAVA)" },
    { name: "OPERATING SYSTEMS LAB" },
    { name: "DATABASE MANAGEMENT SYSTEMS LAB" },
    { name: "SYSTEM SOFTWARE AND MICROPROCESSORS LAB" },
    { name: "COMPILER LAB" },
    { name: "NETWORKING LAB" },
    { name: "DIGITAL LAB" }
  ];
  