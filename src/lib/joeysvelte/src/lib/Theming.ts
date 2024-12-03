import { persisted } from 'svelte-persisted-store'
import type { ImageUploadFile } from './ImageUpload.ts';

export interface Theme {
    text: {
        primary: {
            color: string
        },
        secondary: {
            color: string
        }
    },
    textfield: {
        background: {
            color: string
        }
    },
    background: {
        color: string,
        image: ImageUploadFile,
        topLeft: {
            text: string,
            color: string
        },
        bottomRight: {
            color: string
        }
    },
    category: {
        colors: string[]
    },
    item: {
        folder: {
            color: string
        },
        liveStream: {
            colorChecking: string,
            colorOnline: string
        }
    },
    frame: {
        background: {
            color: string
        },
        border: {
            width: string,
            color: string
        }
    },
    action: {
        colors: {
            confirm: string,
            warning: string,
            danger: string
        }
    },
    clickable: {
        colors: {
            hover: string,
            active: string
        }
    }
}

const darkTheme = {
    text: {
        primary: {
            color: "white"
        },
        secondary: {
            color: "rgba(255, 255, 255, 0.6)"
        }
    },
    textfield: {
        background: {
            color: "rgba(128, 128, 128, 0.05)"
            // color: "rgba(255, 255, 255, 0.1)"
        }
    },
    background: {
        color: "black",
        image: {} as ImageUploadFile,
        topLeft: {
            text: "start",
            color: "rgba(128, 128, 128, 0.1)"
        },
        bottomRight: {
            color: "rgba(128, 128, 128, 0.1)"   
        }
    },
    category: {
        colors: [
            "orange",
            "palevioletred",
            "skyblue"
        ]
    },
    item: {
        folder: {
            color: "white"
        },
        liveStream: {
            colorChecking: "orange",
            colorOnline: "red"
        }
    },
    frame: {
        background: {
            color: "rgba(46, 46, 46, 0.4)"
            // color: "rgba(255, 255, 255, 0.6)"
        },
        border: {
            width: "1px",
            color: "#222"
        }
    },
    action: {
        colors: {
            confirm: "lightgreen",
            warning: "orange",
            danger: "red"
        }
    },
    clickable: {
        colors: {
            hover: "rgba(255,255,255,0.1)",
            active: "rgba(255,255,255,0.05)"
        }
    }
} as Theme;

const lightTheme = {
    text: {
        primary: {
            color: "black"
        },
        secondary: {
            color: "rgba(0, 0, 0, 0.6)"
        }
    },
    textfield: {
        background: {
            color: "rgba(128, 128, 128, 0.05)"
        }
    },
    background: {
        color: "white",
        image: {} as ImageUploadFile,
        topLeft: {
            text: "start",
            color: "rgba(128, 128, 128, 0.1)"
        },
        bottomRight: {
            color: "rgba(128, 128, 128, 0.1)"   
        }
    },
    category: {
        colors: [
            "orange",
            "palevioletred",
            "skyblue"
        ]
    },
    item: {
        folder: {
            color: "black"
        },
        liveStream: {
            colorChecking: "orange",
            colorOnline: "red"
        }
    },
    frame: {
        background: {
            color: "rgba(255, 255, 255, 0.6)"
        },
        border: {
            width: "1px",
            color: "#ccc"
        }
    },
    action: {
        colors: {
            confirm: "green",
            warning: "orange",
            danger: "red"
        }
    },
    clickable: {
        colors: {
            hover: "rgba(255,255,255,0.1)",
            active: "rgba(255,255,255,0.05)"
        }
    }
} as Theme;

export let currentTheme = persisted('theme', darkTheme as Theme);
export let bundledThemes: Record<string, Theme> = {
    "Dark": darkTheme,
    "Light": lightTheme
};
export let savedThemes = persisted('themes', {} as Record<string, Theme>);