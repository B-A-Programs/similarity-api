'use client'

import { FC } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/ui/Tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import Code from '@/components/Code'
import { nodejs, python } from '@/helpers/documentation-code'

const DocumentationTabs: FC = () => {
    return (
        <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
            <TabsList>
                <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
                <TabsTrigger value='python'>Python</TabsTrigger>
            </TabsList>

            <TabsContent value='nodejs' className='mt-2 rounded-md border-4 border-slate-300 bg-slate-100 p-6 dark:border-slate-700 dark:bg-slate-900'>
                <SimpleBar>
                    <Code code={nodejs} language="javascript" show animated={true}  />
                </SimpleBar>
            </TabsContent>

            <TabsContent value='python' className='mt-2 rounded-md border-4 border-slate-300 bg-slate-100 p-6 dark:border-slate-700 dark:bg-slate-900'>
                <SimpleBar>
                    <Code code={python} language="javascript" show animated={true} />
                </SimpleBar>
            </TabsContent>
        </Tabs>
    )
}

export default DocumentationTabs