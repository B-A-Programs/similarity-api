import { FC } from 'react'

import type { Metadata } from "next"
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'

export const metadata: Metadata = {
    title: 'Similarity API | Documentation',
    description: 'Free & open-source text similarity API'
}

const page: FC= () => {
    return( 
    <div className='container max-w-7xl mx-auto mt-12 h-full'>
        <div className='flex flex-col items-center gap-6'>
            <LargeHeading>Making a request</LargeHeading>
            <Paragraph>api/v1/similarity</Paragraph>

            <DocumentationTabs />
        </div>
    </div>
    )
}

export default page