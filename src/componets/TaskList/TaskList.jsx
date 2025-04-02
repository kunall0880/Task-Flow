import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[55%] w-full py-5  mt-10 '>
        {data.tasks.map((e,idx)=>{
            if(e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if(e.newTask){
                return <NewTask key={idx} data={e}/>
            }
            if(e.completed){
                return <CompleteTask key={idx} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={idx} data={e}/>
            }
        })}
    </div>
  )
}

export default TaskList