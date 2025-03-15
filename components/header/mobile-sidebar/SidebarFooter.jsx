const SidebarFooter = () => {


  return (
    <div className="mm-add-listing mm-listitem pro-footer">
      <a href="/myprofile" className="theme-btn btn-style-one mm-listitem__text">
        My Profile
      </a>
      {/* job post btn */}

      <div className="mm-listitem__text">
        <div className="contact-info">
          <span className="address">
            Nashik, Maharashtra <br />
            India
          </span>
          <a href="mailto:workatelevate@gmail.com" className="email">
          workatelevate@gmail.com
          </a>
        </div>
        {/* End .contact-info */}
        {/* End social-links */}
      </div>
      {/* End .mm-listitem__text */}
    </div>
  );
};

export default SidebarFooter;
