import Cover from '../assets/images/forwheels.png' 

const ForWheels = () => {
  return ( 
    <div>
      <section className="min-h-screen pt-32">
        <p>go back</p>
          <img className='' src={Cover}  alt="Project Image"/>
      </section>

      <section>
        <div className="bg-gray-900 text-white min-h-screen">
      {/* Container for the sticky section */}
      <div className="flex">
        {/* Left side - Sticky text content */}
        <div className="w-1/2 p-12">
          <div className="sticky top-12 space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4 tracking-wider">OVERVIEW</h2>
              <p className="text-gray-300 leading-relaxed">
                The Cancer Care project aimed to design an intuitive and comprehensive health management 
                solution tailored for cancer patients. The platform enables users to track medications, 
                monitor vitals, log symptoms, and manage appointments, all in one place. By integrating 
                data visualization, credible medical resources, and seamless doctor/caregiver sharing, 
                the solution enhances patient autonomy, improves adherence to treatment plans, and 
                strengthens communication between patients and healthcare providers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 tracking-wider">TEAM</h3>
              <p className="text-gray-300">Product Manager, Engineers</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 tracking-wider">MY ROLE</h3>
              <p className="text-gray-300">
                User research, Visual Design, Information Architecture, Interaction Design, Prototyping, Testing
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Image stack */}
        <div className="w-1/2 space-y-6 p-6">
          {/* First row of images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 1</span>
            </div>
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 2</span>
            </div>
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 3</span>
            </div>
          </div>

          {/* Second row of images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 4</span>
            </div>
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 5</span>
            </div>
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 6</span>
            </div>
          </div>

          {/* Third row of images */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 7</span>
            </div>
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 8</span>
            </div>
            <div className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image 9</span>
            </div>
          </div>

          {/* Add more content to demonstrate the sticky behavior */}
          <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Additional content area</span>
          </div>
        </div>
      </div>
      </div>
      </section>

      <section className='p-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-12'>
          <div className='col-span-1'>
            <p>[THE BACKGROUND]</p>
          </div>
          <div className='col-span-3'>
            <h1 className='font-anton uppercase text-5xl md:text-6xl lg:text-5xl font-bold leading-tight pb-4'>how it started...</h1>
            <p>Cars are a huge part of our lives, societies and civilization at large. They make life easier, they’re symbols of status, and they inspire children to dream.
              <br />However, there are gaps in this relationship between man and machine. Many car owners have poor maintenance habits, many engineering students struggle to learn because they see more equations than actual cars while studying, and training technicians is expensive and hazardous, with risk of heavy artillery misuse leading to life-changing injuries and death sometimes.
            </p>
          </div>
        </div>
      </section>

      <section className='p-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-12'>
          <div className='col-span-1'>
            <p>[THE PROCESS]</p>
          </div>
          <div className='col-span-3'>
            <h1 className='font-anton text-5xl md:text-6xl uppercase lg:text-5xl font-bold leading-tight pb-4'>Investigating the</h1>
            <p>Prior to starting the design of forwheels, we conducted an extensive market research study to gather information about the current state of automotive education and training at the time. The goal of the research was to identify current weaknesses, new market trends, and possible competitors in order to provide guidance for creating an efficient augmented reality application.</p>
            {/* <img src={Cover} alt="" /> */}
            <p>Once we established the needs of the business from the market research, we conducted user interviews with individuals who fit the product's purpose in order to understand their training requirements and pain points.

We had two objectives. The first was to gain a deeper understanding of preferred learning methods, and the second was to learn about prevalent habits pertaining to vehicle ownership and maintenance.</p>


          </div>
        </div>
      </section>

      
    </div>
   );
}
 
export default ForWheels;