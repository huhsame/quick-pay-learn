import { useState } from "react";
import { Course } from "@/types/course";
import { CourseCard } from "@/components/CourseCard";
import { PaymentModal } from "@/components/PaymentModal";
import heroImage from "@/assets/hero-bg.jpg";
import courseWebImage from "@/assets/course-web.jpg";
import courseBusinessImage from "@/assets/course-business.jpg";
import courseDesignImage from "@/assets/course-design.jpg";

// 샘플 강의 데이터
const courses: Course[] = [
  {
    id: "1",
    title: "웹 개발 완전 정복",
    description: "HTML, CSS, JavaScript부터 React까지 웹 개발의 모든 것을 배웁니다.",
    price: 89000,
    instructor: "김개발",
    duration: "12주",
    level: "초급",
    thumbnail: courseWebImage,
    highlights: [
      "기초부터 시작하는 웹 개발",
      "실전 프로젝트 5개 포함",
      "평생 수강 가능",
    ],
  },
  {
    id: "2",
    title: "비즈니스 전략 마스터",
    description: "성공적인 비즈니스를 위한 전략 수립과 실행 방법을 학습합니다.",
    price: 120000,
    instructor: "이경영",
    duration: "8주",
    level: "중급",
    thumbnail: courseBusinessImage,
    highlights: [
      "실제 케이스 스터디",
      "전략 수립 템플릿 제공",
      "1:1 멘토링 3회 포함",
    ],
  },
  {
    id: "3",
    title: "UI/UX 디자인 실전",
    description: "사용자 중심의 디자인 사고와 실전 디자인 스킬을 익힙니다.",
    price: 95000,
    instructor: "박디자인",
    duration: "10주",
    level: "초급-중급",
    thumbnail: courseDesignImage,
    highlights: [
      "Figma 완벽 활용",
      "포트폴리오 프로젝트",
      "디자인 시스템 구축",
    ],
  },
];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            새로운 기술을 배우세요
          </h1>
          <p className="text-xl opacity-90">
            전문가와 함께하는 온라인 강의 플랫폼
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">인기 강의</h2>
          <p className="text-muted-foreground">
            검증된 전문가들의 강의로 새로운 스킬을 습득하세요
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={handleEnroll}
            />
          ))}
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        course={selectedCourse}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
};

export default Index;
