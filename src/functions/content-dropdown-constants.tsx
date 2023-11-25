import { CustomDropdown } from "@/helpers/custom-dropdown"
import CustomModal from "@/helpers/custom-modal"
import { Icon } from "@iconify/react/dist/iconify.js"

export const spaceList = [{
    label: 'Section 1', 
    items:[
        {label: (
        <div className='flex flex-row w-full cursor-pointer rounded-xl items-center' onClick={() => console.log('anc')}>
            <Icon icon="ic:round-add" className='h-6 w-6'/>
            <span className='ml-6'>
                Add Space
            </span>
        </div>

    )}  
    ], 
    
},
{
  label: 'Section 1', 
  items:[
      {label: (
      <div className='flex flex-row w-full cursor-pointer rounded-xl items-center' onClick={() => console.log('anc')}>
          <Icon icon="bxs:cube" className='h-6 w-6'/>
          <span className='ml-6'>
              Physics
          </span>
      </div>

  )}  
  ], 
  
},
{
  label: 'Section 1', 
  items:[
      {label: (
      <div className='flex flex-row w-full cursor-pointer rounded-xl items-center' onClick={() => console.log('anc')}>
          <Icon icon="bxs:cube" className='h-6 w-6'/>
          <span className='ml-6'>
              Physics
          </span>
      </div>

  )}  
  ], 
  
}]

export const menuDropDown = (contentID: string, handleDelete: (contentId: string) => void) => [
    // {
    //     label: 'Section 1',
    //     items: [
    //         {label: (
    //           <CustomDropdown offset={26} placement="left" title=
    //           {            
    //             <div className='flex flex-row w-full cursor-pointer items-center'>
    //                 <Icon icon="material-symbols:text-select-move-down-rounded" className='h-6 w-6'/>
    //                 <span className='ml-6 mt-0.6'>Move to space
    //                 </span>
    //             </div>
    //           } sections={spaceList}/>
    //       ),
    //     }, 
    //     ]
    //   },
    {
      label: 'Section 1', 
      items: [
        {label: (
          <div className='flex flex-row w-full cursor-pointer items-center'>
            <Icon icon="ph:link-bold" className='h-6 w-6'/>
            <span className='ml-6 mt-0.6'>Copy link
            </span>
          </div>
        ), clickEvent: () => console.log("Clicked on WebDev")}, 
      ]
    },
    {
      label: 'Section 2', 
      items: [
        {label: (
          <CustomModal 
            title={
              <div className='flex flex-row w-full cursor-pointer items-center'>
              <Icon icon="gg:trash" className='h-6 w-6'/>
              <span className='ml-6 mt-0.6'>Delete
              </span>
              </div>
            } 
            contentMain={<div className="mb-5">Are you sure you want to delete this item?</div>}
            actionTitle="Delete"
            actionEvent={() => handleDelete(contentID)}
            footer/>
        )}, 
      ]
    },
  ]