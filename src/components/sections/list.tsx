import React from 'react';
import { CheckCircle, LucideProps } from 'lucide-react';

interface ListProps {
    title:string,
    items:string[]
    conclusion?:string
    style?: React.CSSProperties
    accentColor?:string
    iconColor?:string
    Icon?:React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>
    iconSize?:number
}

export const List = ({ 
  title = "Why do you Need this App in ERPNext",
  items = [],
  conclusion = "",
  accentColor = 'amber',
  iconColor = 'text-sky-600',
  Icon = CheckCircle,
  iconSize = 24,
  style={}
}:ListProps) => {

  return (
    <section className="" style={style}>
      <div className="border-none">
        <div>
          <h2 className={`text-2xl font-semibold text-[#1A5276] decoration-${accentColor}-500 decoration-2 underline-offset-4 mb-6`}>
            {title}
          </h2>
        </div>
        <div className="sm:px-6 pb-6">
          <ul className="list-none space-y-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon 
                  className={`flex-shrink-0 ${iconColor} mt-1 w-4 sm:w-6`} 
                  size={iconSize} 
                />
                <p className="text-sm sm:text-lg text-justify leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose">
                  {item}
                </p>
              </li>
            ))}
            {conclusion && (
              <li className="pt-2">
                <p className="text-lg leading-relaxed">
                  {conclusion}
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default List;
