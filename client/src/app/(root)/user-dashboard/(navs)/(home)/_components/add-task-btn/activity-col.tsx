import { Button } from '@/components/ui/button'
import { SendHorizonal } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input'
import UsersList from './userlist'

const Activitycol = () => {
  return (
    <div className="col-span-2 flex h-[550px] flex-col">
            {/* Activityboard */}
            <div className="flex h-full flex-col justify-between">
              <UsersList />
              <div className="flex rounded border border-black bg-white p-2">
                <Input
                  placeholder="Write commnet or add someone...."
                  className="border-none placeholder:text-base text-lg shadow-none outline-none"
                />
                <Button className="flex items-center gap-2 text-secondary">
                  <SendHorizonal />
                  <span>Send</span>
                </Button>
              </div>
            </div>
          </div>
  )
}

export default Activitycol