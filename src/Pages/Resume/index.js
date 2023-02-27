import React from 'react';
import { Document, Page , pdfjs } from 'react-pdf';
import Resume from '../../Assets/Resume/BabakJahaniCW.pdf'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf"
const MainResume = () => {
    return (
            <Document file={resumeLink} className=''>
                <Page pageNumber={1} className=''/>
            </Document>
    );
}

export default MainResume;
