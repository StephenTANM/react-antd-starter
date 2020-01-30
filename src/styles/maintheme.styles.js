import {
    spring
} from 'react-router-transition';

export const mapPageStyles = (styles) => {
    return {
        transform: `translate(${styles.translateX}vw,${styles.translateY}vh)`,
        opacity: styles.opacity
    }
}
export const mapSubPageStyles = (styles) => {
    return {
        transform: `translate(${
            styles.translateX
        }%,${
            styles.translateY
        }%)`,
        opacity: styles.opacity
    }
}

function addSpring(val) {
    return spring(val, {
        stiffness: 200,
        damping: 20
    })
}

export const maintheme = {
    pageLeave: {
        translateX: addSpring(-50),
        translateY: 0,
        opacity: 0
    },
    pageEnter: {
        translateX: 50,
        translateY: 0,
        opacity: 0
    },
    pageActive: {
        translateX: addSpring(0),
        translateY: 0,
        opacity: 1
    },
    subPageLeave: {
        translateX: 0,
        translateY: addSpring(100),
        opacity: 0
    },
    subPageEnter: {
        translateX: 30,
        translateY: 0,
        opacity: 0
    },
    subPageActive: {
        translateX: addSpring(0),
        translateY: 0,
        opacity: 1
    }
}
export const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 4
        },
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 24
        },
    },
}