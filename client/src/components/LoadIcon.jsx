import { renderToStaticMarkup } from 'react-dom/server';

const loadIcon = async (iconPack, iconName) => {
    try {
        let icons;
        switch (iconPack) {
            case 'fa':
                icons = await import('react-icons/fa');
                break;
            case 'io':
                icons = await import('react-icons/io');
                break;
            case 'io5':
                icons = await import('react-icons/io5');
                break;
            case 'md':
                icons = await import('react-icons/md');
                break;
            case 'ti':
                icons = await import('react-icons/ti');
                break;
            case 'go':
                icons = await import('react-icons/go');
                break;
            case 'fi':
                icons = await import('react-icons/fi');
                break;
            case 'gi':
                icons = await import('react-icons/gi');
                break;
            case 'wi':
                icons = await import('react-icons/wi');
                break;
            case 'di':
                icons = await import('react-icons/di');
                break;
            case 'ai':
                icons = await import('react-icons/ai');
                break;
            case 'bs':
                icons = await import('react-icons/bs');
                break;
            case 'ri':
                icons = await import('react-icons/ri');
                break;
            case 'fc':
                icons = await import('react-icons/fc');
                break;
            case 'gr':
                icons = await import('react-icons/gr');
                break;
            case 'hi':
                icons = await import('react-icons/hi');
                break;
            case 'si':
                icons = await import('react-icons/si');
                break;
            case 'sl':
                icons = await import('react-icons/sl');
                break;
            case 'im':
                icons = await import('react-icons/im');
                break;
            case 'bi':
                icons = await import('react-icons/bi');
                break;
            case 'cg':
                icons = await import('react-icons/cg');
                break;
            case 'vsc':
                icons = await import('react-icons/vsc');
                break;
            case 'tb':
                icons = await import('react-icons/tb');
                break;
            case 'tfi':
                icons = await import('react-icons/tfi');
                break;
            case 'rx':
                icons = await import('react-icons/rx');
                break;
            case 'pi':
                icons = await import('react-icons/pi');
                break;
            case 'lia':
                icons = await import('react-icons/lia');
                break;
            case 'fa6':
                icons = await import('react-icons/fa6');
                break;
            case 'hi2':
                icons = await import('react-icons/hi2');
                break;
            default:
                throw new Error(`Icon pack "${iconPack}" not supported`);
        }
        
        const Icon = icons[iconName];
        
        if (!Icon) throw new Error(`Icon "${iconName}" not found in pack "${iconPack}"`);
        
        const svgString = renderToStaticMarkup(<Icon />);
        return svgString;
    } catch (error) {
        console.error('Failed to load icon:', error);
        return null;
    }
};

export default loadIcon