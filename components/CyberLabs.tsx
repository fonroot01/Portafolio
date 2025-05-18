import React from "react";
import Link from "next/link";
import { labsData } from "@/config/labs";

const CyberLabs = () => (  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {labsData.map(lab => (
          <div key={lab.slug} className="group bg-background hover:bg-background/80 rounded-xl shadow-lg p-6 text-left flex flex-col justify-between transition-all duration-300 hover:shadow-xl min-h-[320px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{lab.title}</h3>
              </div>
              <p className="text-muted-foreground text-base mb-4">{lab.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {lab.badges?.map(badge => (
                  <span key={badge} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary transition-colors">
                    {badge}
                  </span>
                ))}
              </div>            </div>
            <Link
              href={`/labs/${lab.slug}`}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-white hover:bg-gray-100 text-black dark:text-black transition-all duration-200 shadow-sm"
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <span>Ver laboratorio</span>
            </Link>
          </div>
        ))}  </div>
);

export default CyberLabs;
