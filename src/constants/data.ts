
export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};


export const institutionImages = {
  BKA: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/ef/Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_B%C3%A1ch_Khoa_H%C3%A0_N%E1%BB%99i.svg/682px-Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_B%C3%A1ch_Khoa_H%C3%A0_N%E1%BB%99i.svg.png",
  DDN: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo_DAI_NAM.png",
  DDD: "data:image/png;base64,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",
  DDL: "https://inkythuatso.com/uploads/thumbnails/800/2021/12/logo-epu-inkythuatso-14-15-47-22.jpg",
  YTC: "https://cdn.haitrieu.com/wp-content/uploads/2022/11/Logo-Truong-Dai-hoc-Y-te-Cong-cong.png",
  YHB: "https://inkythuatso.com/uploads/thumbnails/800/2021/12/logo-dai-hoc-y-ha-noi-inkythuatso-01-25-14-49-41.jpg",
  YDS: "https://ump.edu.vn/uploads/ckeditor/images/LOGO-DHYD-400.jpg",
  QHY: "https://upload.wikimedia.org/wikipedia/vi/b/ba/%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Y_D%C6%B0%E1%BB%A3c.png"
}