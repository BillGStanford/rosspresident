import React from 'react';
import { useRouter } from 'next/router';
import { presidentialActions } from '../../data-center/presidential-actions-data';

const ActionPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const action = presidentialActions.find(a => a.id === id);
  
  if (!action) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <button 
          onClick={() => router.back()}
          className="text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Back to Presidential Actions
        </button>
        
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
        
        <h1 className="text-4xl font-serif mb-8">{action.title}</h1>
        
        <div className="prose max-w-none">
          {action.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionPage;