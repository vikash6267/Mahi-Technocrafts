


import { projects } from '../../data/projects';
export default () => {
  return (
  <>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-10 lg:gap-10 px-2">
  {projects.map((currElem) => (
    <a
      href={currElem.link}
      target='_blank'
      className="max-w-sm min-h-[300px] rounded overflow-hidden bg-gray-100 workCard p-2 shadow-2xl shadow-amber-400"
      key={currElem.id}
    >
      <img className="w-full h-[50%]" src={currElem.image} alt="Example Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-4 text-center">
          {currElem.name}
        </div>
        <p className="text-gray-700 text-base text-center">
          {currElem.desc}
        </p>
      </div>
    </a>
  ))}
</div>

  </>
  );
};