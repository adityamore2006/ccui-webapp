import React from 'react'

export default function MemberCard({ member, imageUrl }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
      <img
        src={imageUrl}
        alt={member.name}
        loading="lazy"
        className="mx-auto h-28 w-28 rounded-full object-cover"
      />

      <h4 className="mt-4 font-semibold text-slate-900">{member.name}</h4>
      <p className="text-sm text-slate-600">{member.role}</p>
      {member.bio ? <p className="text-sm text-slate-500 mt-2">{member.bio}</p> : null}
    </div>
  )
}
