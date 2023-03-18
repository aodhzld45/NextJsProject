import Animation from "../home/animation";
import Link from "next/link";

export default function Hero() {
    return (

    <>
         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 서현석입니다!
              <br className="hidden lg:inline-block" />
              <br className="hidden lg:inline-block" /> 
              반갑습니다!
            </h1>
            <p className="mb-8 leading-relaxed">
            장식하는 있는 이상, 뿐이다. 모래뿐일 끓는 것이 때까지 수 이 스며들어 되려니와, 이것이다. 유소년에게서 원질이 광야에서 용감하고 전인 청춘의 방지하는 황금시대다. 구하지 황금시대를 품었기 커다란 내려온 따뜻한 대중을 아름답고 칼이다. 사랑의 갑 남는 하는 밝은 속잎나고, 말이다. 하는 곳으로 꽃 낙원을 용감하고 것은 기쁘며, 방지하는 미묘한 있다. 이 청춘의 싹이 대중을 청춘의 피가 귀는 속에서 생생하며, 것이다. 기관과 천지는 그들의 그들의 같은 품으며, 장식하는 찾아 아름다우냐? 품에 그와 그들은 능히 구하기 피에 황금시대다.
              </p>
            <div className="flex justify-center">
              <Link href="/projects" legacyBehavior>
              <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
              </a>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
    </>






    )

}