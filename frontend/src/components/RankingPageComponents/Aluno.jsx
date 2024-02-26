import trophy from '../../assets/icons8-trophy.png'
import profileWill from '../../assets/William.png'

const Aluno = ({profileImg, name, trainer, level, expProgress, exp}) => {

  const progressOfExp = () => {
    if (exp === '50') {
      return expProgress = 'w-1/2'
    }
    if (exp === '100') {
      return expProgress = 'w-full'
    }
    if (exp === '0') {
      return expProgress = 'w-1/10'
    }
    if (exp === '10') {
      return expProgress = 'w-1/6'
    }
    if (exp === '20') {
      return expProgress = 'w-1/5'
    }
    if (exp === '30') {
      return expProgress = 'w-1/3'
    }
    if (exp === '40') {
      return expProgress = 'w-2/5'
    }
    if (exp === '60') {
      return expProgress = 'w-3/5'
    }
    if (exp === '70') {
      return expProgress = 'w-2/3'
    }
    if (exp === '80') {
      return expProgress = 'w-4/5'
    }
    if (exp === '90') {
      return expProgress = 'w-5/6'
    }
  };
  const progressClass = progressOfExp();

  return (
    <>
  <div className="col-span-1 flex items-center ml-8">
  <img
    src={profileImg}
    alt="Profile"
    className="w-10 h-10 rounded-full mr-4"
  />
  <div>
    <span className="flex font-mono">{name} </span>
  </div>
</div>
<div className="col-span-1 ml-4">{trainer}</div>
<div className="col-span-1 ml-4">{level}</div>
<div className="col-span-1 flex flex-col items-start">
  <div className="w-48 h-4 bg-gray-200 rounded-full flex">
    <div className={`${progressClass} h-full bg-fuchsia-800 border-2 rounded-full flex justify-evenly items-center`}>
    </div>
  </div>
  <span className='ml-16'>{exp}/100</span>
</div>
</>
  )
}

export default Aluno