import React from 'react';
import { presidentialActions } from '../data-center/presidential-actions-data';
import Link from 'next/link';

const PresidentialActions = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Presidential Actions</h1>
      
      <div className="grid gap-8">
        {presidentialActions.map((action) => (
          <Link 
            href={`/action/${action.id}`} 
            key={action.id}
            className="border-b border-gray-200 pb-8 hover:bg-gray-50 transition-colors p-6 -mx-6"
          >
            <div className="flex flex-col">
              <div className="text-sm text-gray-500 mb-2">
                {new Date(action.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="text-sm text-blue-600 mb-2">
                {action.type} {action.number}
              </div>
              <h2 className="text-2xl mb-3">{action.title}</h2>
              <p className="text-gray-600">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PresidentialActions;