import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import { MdMarkunread } from "react-icons/md";

export const NoteCard = ({color}) => {
  return (
    <div className="col-md-4 single-note-item all-category">
                <div className="card card-body">
                    <span className="side-stick" style={{backgroundColor: color}}></span>
                    <FaNoteSticky style={{marginLeft: "auto", color: color}}/>
                    <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Book a Ticket for Movie">Django REST Framework Basics</h5>
                    <p className="note-date font-12 text-muted">11 March 2009</p>
                    <div className="note-content">
                        <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">An introduction to Django REST Framework (DRF), covering basic concepts, setting up serializers, views, and routers for building APIs.</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="mr-1"><MdMarkunread style={{fontSize: "25px", cursor:"pointer", color: color}}/></span>
                    </div>
                </div>
            </div>
  )
}


export default NoteCard
