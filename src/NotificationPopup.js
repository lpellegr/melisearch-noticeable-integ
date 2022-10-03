import React, { useEffect } from 'react'
import {dialog} from "./Modal";

const config = {
  noticeable: {
    widget: 'Qglwge0Z4YAz4zMtIrjk',
  },
}

const NotificationPopup = () => {
  useEffect(() => {
    window.noticeable.on('widget:ready', config.noticeable.widget, (e) => {
      dialog.show();
    });
    window.noticeable.render('widget', config.noticeable.widget, {
      selector: '#noticeable-widget',
    })
    return () => {
      window.noticeable.destroy('widget', config.noticeable.widget)
    }
  }, [])
  return <div id="noticeable-widget" />
}

export default NotificationPopup
