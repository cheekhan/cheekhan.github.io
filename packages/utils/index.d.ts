/// <reference path="./src/ganZhi/global.d.ts" />
declare module "@cheekhan/utils" {
    declare namespace ganzhi {
        enum YinYang {
            Yin,
            Yang,
        }

        enum WuXing {
            Jin,
            Shui,
            Mu,
            Huo,
            Tu,
        }

        enum ShengKe {
            Sheng = "生",
            Ke = "克",
            BeiSheng = "被生",
            BeiKe = "被克",
            BiHe = "相同",
        }

        // 地支类型
        abstract class EarthlyBranch {
            abstract wuXing: WuXing;
            abstract yinYang: YinYang;
            abstract value: ZhiName;
            abstract id: number;

            /** 计算相冲 */
            abstract getChong(target: EarthlyBranch): boolean;

            /** 相刑 */
            abstract getXing(target: EarthlyBranch): boolean;

            /** 相害 */
            abstract getHai(target: EarthlyBranch): boolean;

            /** 相破 */
            abstract getPo(target: EarthlyBranch): boolean;

            /** 计算五行生克 */
            getFiveRel(target: EarthlyBranch): ShengKe;
        }

        class BranchZi extends EarthlyBranch {
        }

        class BranchChou extends EarthlyBranch {
        }

        class BranchYin extends EarthlyBranch {
        }

        class BranchMao extends EarthlyBranch {
        }

        class BranchChen extends EarthlyBranch {
        }

        class BranchSi extends EarthlyBranch {
        }

        class BranchWu extends EarthlyBranch {
        }

        class BranchWei extends EarthlyBranch {
        }

        class BranchShen extends EarthlyBranch {
        }

        class BranchYou extends EarthlyBranch {
        }

        class BranchXu extends EarthlyBranch {
        }

        class BranchHai extends EarthlyBranch {
        }

        /** 获取没有副作用的数组 */
        function useDizhiList(start?: EarthlyBranch): Array<EarthlyBranch>;

        // 天干类型
        abstract class HeavenlyStem {
        }

        class StemJia extends HeavenlyStem {
        }

        class StemYi extends HeavenlyStem {
        }

        class StemBing extends HeavenlyStem {
        }

        class StemDing extends HeavenlyStem {
        }

        class StemWu extends HeavenlyStem {
        }

        class StemJi extends HeavenlyStem {
        }

        class StemGeng extends HeavenlyStem {
        }

        class StemXin extends HeavenlyStem {
        }

        class StemRen extends HeavenlyStem {
        }

        class StemGui extends HeavenlyStem {
        }

        /** 获取没有副作用的数组 */
        function useTianganList(start?: HeavenlyStem): Array<HeavenlyStem>;

        /** 获取当前时间的四柱信息 */
        function useYmdhInfo(date?: string): {
            y: [HeavenlyStem, EarthlyBranch];
            m: [HeavenlyStem, EarthlyBranch];
            d: [HeavenlyStem, EarthlyBranch];
            h: [HeavenlyStem, EarthlyBranch];
            yuejiang: EarthlyBranch;
            current: Date;
        };

        // 干支链表节点
        type JiaziLinkType = {
            data: [HeavenlyStem, EarthlyBranch];
            next: JiaziLinkType | null;
        };
        // 干支链表根节点
        const linkRoot: JiaziLinkType;

        /** 获取下一个干支组合 */
        function findNext(
            stem: HeavenlyStem,
            branch: EarthlyBranch,
            step?: number,
        ): JiaziLinkType;
    }
}
