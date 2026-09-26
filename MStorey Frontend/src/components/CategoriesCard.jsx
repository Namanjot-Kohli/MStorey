// // import React from 'react'

// // const CategoriesCard = (props) => {
// //   return (
// //     <div className='w-75 h-55 bg-yellow-100 p-1 pb-0  flex flex-col justify-center items-center rounded-md hover:cursor-pointer'>
// //         <img src={props.image} className='w-[95%] rounded-md'></img>
// //         <span className='text-base mt-0.5'>{props.name}</span>
// //     </div>
// //   )
// // }

// // export default CategoriesCard
// // import React from 'react'

// // const CategoriesCard = ({ name, image }) => {
// //   return (
// //     <div className='w-40 sm:w-44 md:w-48 bg-white p-3 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
// //         <div className='w-full aspect-square rounded-lg overflow-hidden bg-stone-100'>
// //             <img
// //                 src={image}
// //                 alt={name}
// //                 className='w-full h-full object-cover'
// //             />
// //         </div>
// //         <span className='block text-center text-sm md:text-base font-medium text-teal-900 mt-2 truncate'>
// //             {name}
// //         </span>
// //     </div>
// //   )
// // }

// // export default CategoriesCard

// // import React from 'react'

// // const CategoriesCard = ({ name, image }) => {
// //   return (
// //     <div className='w-full bg-white p-3 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
// //         <div className='w-full aspect-square rounded-lg overflow-hidden bg-stone-100'>
// //             <img
// //                 src={image}
// //                 alt={name}
// //                 className='w-full h-full object-cover'
// //             />
// //         </div>
// //         <span className='block text-center text-sm md:text-base font-medium text-teal-900 mt-2 truncate'>
// //             {name}
// //         </span>
// //     </div>
// //   )
// // }

// // export default CategoriesCard

// // import React from 'react'

// // const CategoriesCard = ({ name, image }) => {
// //   return (
// //     <div className='w-full bg-white p-3 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
// //         <div className='w-full aspect-video rounded-lg overflow-hidden bg-stone-100'>
// //             <img
// //                 src={image}
// //                 alt={name}
// //                 className='w-full h-full object-cover'
// //             />
// //         </div>
// //         <span className='block text-center text-sm md:text-base font-medium text-teal-900 mt-2 truncate'>
// //             {name}
// //         </span>
// //     </div>
// //   )
// // }

// // export default CategoriesCard

// // import React from 'react'

// // const CategoriesCard = ({ name, image }) => {
// //   return (
// //     <div className='w-full bg-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
// //         <div className='w-full aspect-video rounded-lg overflow-hidden bg-stone-100'>
// //             <img
// //                 src={image}
// //                 alt={name}
// //                 className='w-full h-full object-cover'
// //             />
// //         </div>
// //         <span className='block text-center text-base md:text-lg font-medium text-teal-900 mt-3 truncate'>
// //             {name}
// //         </span>
// //     </div>
// //   )
// // }

// // export default CategoriesCard

// // import React from 'react'

// // const CategoriesCard = ({ name, image }) => {
// //   return (
// //     <div className='w-full max-w-[240px] bg-white p-3 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
// //         <div className='w-full aspect-video rounded-md overflow-hidden bg-stone-100'>
// //             <img
// //                 src={image}
// //                 alt={name}
// //                 className='w-full h-full object-cover object-center'
// //             />
// //         </div>
// //         <span className='block text-center text-base font-medium text-teal-900 mt-2.5 truncate'>
// //             {name}
// //         </span>
// //     </div>
// //   )
// // }

// // export default CategoriesCard

// const CategoriesCard = ({ name, image }) => {
//   return (
//     <div className='w-full bg-white p-3 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
//         <div className='w-full aspect-video rounded-md overflow-hidden bg-stone-100'>
//             <img
//                 src={image}
//                 alt={name}
//                 className='w-full h-full object-cover object-center'
//             />
//         </div>
//         <span className='block text-center text-base font-medium text-teal-900 mt-2.5 truncate'>
//             {name}
//         </span>
//     </div>
//   )
// }

import React from 'react'

const CategoriesCard = ({ name, image }) => {
  return (
    <div className='w-full bg-white p-2 md:p-3 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer'>
        <div className='w-full aspect-square md:aspect-video rounded-md overflow-hidden bg-stone-100'>
            <img
                src={image}
                alt={name}
                className='w-full h-full object-cover object-center'
            />
        </div>
        <span className='block text-center text-sm md:text-base font-medium text-teal-900 mt-1.5 md:mt-2.5 truncate'>
            {name}
        </span>
    </div>
  )
}

export default CategoriesCard