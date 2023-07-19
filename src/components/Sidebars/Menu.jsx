import React from 'react'
import style from "./Menu.module.css"
import {Link, useLocation } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className={style.sidebar}>
      <nav className={style.sidebarnav}>
      <div className={style.primebox}>
      <div className={style.dashboard}>
      <DashboardOutlinedIcon/>
      <Link className={location.pathname==='/dashboard' ? style.dashboardLinkActive:style.dashboardLink} to='/dashboard'>Dashboard</Link>
      </div>
      <br />
      <div className={style.assessment}>
      <NoteAltOutlinedIcon/>
      <Link className={location.pathname==='/assessment' ? style.assessmentLinkActive:style.assessmentLink} to='/assessment'>Assessment</Link>
      </div>
      <br />
      <div className={style.myLibrary}>
      <LibraryAddCheckOutlinedIcon/>
      <Link className={location.pathname==='/mylibrary' ? style.myLibraryLinkActive:style.myLibraryLink} to='/mylibrary'>My Library</Link>
      </div>
      <br />
      <br />
      </div>
      <br />
      <div className={style.secondbox}>
      <span className={style.admin}> Admin </span>
        <div className={style.round}>
          <AssignmentOutlinedIcon/>
        <Link className={location.pathname==='/roundstatus' ? style.roundLinkActive:style.roundLink} to='/roundstatus'>Round Status</Link>
        </div>
      </div>
      </nav>
     </aside>
  )
}
