import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                    © EvoGym All Rights Reserved.
                </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Ipsum is simply dummy text of the printing and type</p>
                <p className='my-5'>Lorem Ipsum has been the industry's standard dummy</p>
                <p>text ever since the 1500s, when an unknown printer took</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Ipsum is simply dummy text of the printing and type</p>
                <p>32689-45878</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer