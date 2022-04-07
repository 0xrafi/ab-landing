import React from 'react';

import breakfastBangalore from '../img/Breakfast-in-Bangalore-logo.jpg';

function Registry() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://use.typekit.net/foobar.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div className='rsvpPage'>
            <img src={breakfastBangalore} className="normalPic" />
            <br></br>
            <a class="zola-registry-embed" href="MY ZOLA URL HERE" data-registry-key="MY ZOLA REGISTRY NAME HERE">
                Our Zola Wedding Registry
                </a>
                <script>
                    !function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}
                (document,"script","zola-wjs");
                </script>
        </div>
    );
}

export default Registry;