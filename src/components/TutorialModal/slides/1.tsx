import { Flex } from '@/components';
import styles from './styles.module.scss';
import ritmik from '@/assets/ritmik/RitimkH.svg'
import { AdvanceIcon } from '@/assets';

type _ = {
    next : () => void;
}

const Slide : React.FC<_> = ({next}) => {
    return <div className={styles.bg}>
        <button onClick={next} className={styles.return}>
            <AdvanceIcon/>
        </button>
        <Flex gap="15px" className={styles.mainText}>
            {ritmik}
            <p>
                Привет!
                Я Ритмик, твой помощник здесь.
                Покажу, что к чему, быстро и по делу.
                Готов(а)? Поехали!
            </p>
        </Flex>
    </div>;
};

export default Slide;