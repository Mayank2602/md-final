import Link from 'next/link'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <div className='flex flex-row justify-center content-center text-center'> <img 
            className="h-14 w-auto cursor-pointer object-contain "
            src="https://yt3.ggpht.com/ytc/AKedOLRjIye2rGzS3xHNLXgPw-4DjDverzaH5-0jScn6NA=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          ></img>
          <h1 className=' font-sans-serif text-0.5xl md:text-2xl px-2 cursor-pointer place-self-center'>Mailer Daemon</h1>
          </div> 
        </Link>
        <p></p>  
        {/* <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div> */}
      </div>
      <div className="flex flex-row ">
        <a href='https://placementor-2021.herokuapp.com/' target={'_blank'}>
      <div className="flex items-center space-x-5 rounded-full bg-gray-200 py-2 px-5 m-2 cursor-pointer font-serif"> 
        <h3 >Placementor</h3>
      </div>
      </a>
      {/* </Link> */}
      <a href='https://www.iitism.ac.in/iitismnew/' target='_blank'>
      <div className="flex items-center space-x-5 rounded-full bg-gray-200 py-2 px-5 m-2 cursor-pointer font-serif">
        <h3>IIT-ISM</h3>
      </div>
      </a>
      </div>
    </header>
  )
}

export default Header;
