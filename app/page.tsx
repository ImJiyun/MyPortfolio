import Image from "next/image";
import Header from "./components/Header";
import IntroSection from "./sections/introSection";
import TimelineSection from "./sections/TimelineSection";

// 함수 선언식
// 호이스팅
// 우선 순위가 높다
// 페이지 같은 경우
// index.html
// 함수 선언식 - 페이지
// 함수 표현식 - component

// viewport
// 100 vh

// tailwind
// 1 - 4px
// font - 16 64px

// text - lg

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items-center min-h-screen">
      <Header />
      <IntroSection />
      <TimelineSection />
    </main>
  );
}
