export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  duration: string;
  level: string;
  thumbnail: string;
  highlights: string[];
}

export interface PaymentInfo {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  courseTitle: string;
  amount: number;
}
