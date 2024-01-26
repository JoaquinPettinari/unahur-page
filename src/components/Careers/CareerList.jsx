import { useState, useMemo } from "preact/hooks";
import { CAREER_LIST } from "../../mockData/careers";

export default function CareerList() {
  const [activeCardId, setActiveCardId] = useState(CAREER_LIST[0].id);

  const activeCard = useMemo(() => {
    return CAREER_LIST?.find((career) => career.id === activeCardId);
  }, [activeCardId]);

  return (
    <div class="flex justify-center flex-wrap gap-6">
      {CAREER_LIST.map((career, index) => {
        const { id, icon, name } = career;
        return (
          <div
            class={`flex flex-col items-center h-72, w-48 p-4 cursor-pointer rounded-2xl ${
              activeCardId === id ? "shadow-2xl" : ""
            }`}
            onClick={() => setActiveCardId(id)}
            key={index}
          >
            <img src={icon.src} alt="Icon of career" class="w-16 h-16 mb-2" />
            <h2 class="text-xl font-bold">{name}</h2>
          </div>
        );
      })}
      <div class="rounded-2xl shadow-xl w-full py-10 px-10 flex-wrap text-start flex lg:py-20 lg:px-32">
        <div class="w-4/4 lg:w-2/4">
          <p class="primary-color text-xl font-bold mb-5">{activeCard.name}</p>
          <p class="font-normal text-base grey-color">
            {activeCard.primaryInformation}
          </p>
          <div class="my-2">
            <ul class="flex w-full flex-wrap">
              {activeCard.checks.map((check, index) => (
                <li class="w-2/4 py-2" key={index}>
                  ✔️ {check}
                </li>
              ))}
            </ul>
          </div>
          <p class="font-normal text-base grey-color">
            {activeCard.secondaryInformation}
          </p>
        </div>
        <div class="w-4/4 lg:w-2/4 flex items-center p-12">
          <img src={activeCard.image.src} alt="Career describe with image" />
        </div>
      </div>
    </div>
  );
}
