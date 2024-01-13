import styles from './header.module.css';
const navigation = [
  { name: 'Simon Wu', href: '#SW'},
  { name: 'Projects', href: '#projects'},
  { name: 'Skills', href: '#skills'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    
    <div className={`px-18vw py-6 flex flex-1 items-center justify-between sm:items-stretch sm:justify-start bg-gray-800 sticky top-0 `}>
      <div className="flex flex-1 space-x-4 justify-between items-center">
        <div className='hidden md:inline'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                'text-xl',
                'navigation',
                'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <a
            key='Resume'
            href=''
            className={classNames(
              'resume',
              'text-xl',
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium'
              )}
            >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}
