// 多言語対応の翻訳データ
const translations = {
    ja: {
        'nav.overview': 'Overview',
        'nav.features': 'Features',
        'nav.members': 'Members',
        'nav.citation': 'Citation',
        'hero.title': 'OpenMAP-T1: A Rapid Deep-Learning Approach<br>to Parcellate 280 Anatomical Regions to Cover the Whole Brain',
        'hero.subtitle': 'A deep learning-based approach for rapid and accurate whole-brain segmentation of T1-weighted brain MRI images',
        'hero.readPaper': '論文を読む',
        'hero.huggingface': 'Hugging Face',
        'overview.title': 'Overview',
        'overview.background.title': '研究背景',
        'overview.background.text': 'OpenMAP-T1は、従来のアトラス正規化ベースの手法やマルチアトラスラベル融合（MALF）技術の限界を克服することを目指した、深層学習ベースの手法です。脳画像のパーセレーションは、神経科学および臨床研究における基本的なプロセスであり、特定の脳領域の詳細な分析を可能にします。',
        'overview.contributions.title': '主な貢献',
        'overview.contributions.item1': 'GPUでは1-2分、CPUでも約30分で処理が完了',
        'overview.contributions.item2': '画像環境の変動や脳萎縮に対する高い堅牢性',
        'overview.contributions.item3': '280の解剖学的領域への階層的分割',
        'overview.contributions.item4': 'JHUアトラスを使用',
        'features.title': 'Key Features',
        'features.speed.title': '高速処理',
        'features.speed.text': 'GPUでは1-2分、CPUでも約30分でT1強調画像の処理が完了します。',
        'features.accuracy.title': '高精度',
        'features.accuracy.text': '深層学習モデルにより、従来手法を上回る精度で脳領域を分割します。',
        'features.coverage.title': '全脳カバー',
        'features.coverage.text': '280の解剖学的領域に階層的に分割し、全脳をカバーします。',
        'features.robustness.title': '堅牢性',
        'features.robustness.text': '画像環境の変動や脳萎縮に対して高い堅牢性を有します。',
        'features.hierarchical.title': '階層的分割',
        'features.hierarchical.text': '5つの階層レベルで、8構造から280構造まで柔軟に分割可能です。',
        'features.docker.title': 'Docker対応',
        'features.docker.text': 'Dockerコンテナを使用して簡単にセットアップ・実行できます。',
        'citation.title': 'Citation',
        'members.title': 'Members',
        'members.nishimaki.name': 'Kei Nishimaki',
        'members.nishimaki.affiliation': 'Department of Applied Informatics, Graduate School of Science and Engineering, Hosei University',
        'members.onda.name': 'Kengo Onda',
        'members.onda.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.ikuta.name': 'Kumpei Ikuta',
        'members.ikuta.affiliation': 'Department of Applied Informatics, Graduate School of Science and Engineering, Hosei University',
        'members.chotiyanonta.name': 'Jill Chotiyanonta',
        'members.chotiyanonta.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.uchida.name': 'Yuto Uchida',
        'members.uchida.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.mori.name': 'Susumu Mori',
        'members.mori.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.iyatomi.name': 'Hitoshi Iyatomi',
        'members.iyatomi.affiliation': 'Department of Applied Informatics, Graduate School of Science and Engineering, Hosei University',
        'members.lab': 'Laboratory',
        'members.scholar': 'Google Scholar',
        'members.company': 'Company',
        'members.oishi.name': 'Kenichi Oishi',
        'members.oishi.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.corresponding': '* Corresponding author',
        'contact.label': 'Contact:',
        'contact.email': 'koishi2@jhmi.edu',
        'meta.title': 'OpenMAP-T1 | Whole Brain Segmentation and Parcellation'
    },
    en: {
        'nav.overview': 'Overview',
        'nav.features': 'Features',
        'nav.members': 'Members',
        'nav.citation': 'Citation',
        'hero.title': 'OpenMAP-T1: A Rapid Deep-Learning Approach<br>to Parcellate 280 Anatomical Regions to Cover the Whole Brain',
        'hero.subtitle': 'A deep learning-based approach for rapid and accurate whole-brain segmentation of T1-weighted brain MRI images',
        'hero.readPaper': 'Read Paper',
        'hero.huggingface': 'Hugging Face',
        'overview.title': 'Overview',
        'overview.background.title': 'Research Background',
        'overview.background.text': 'OpenMAP-T1 is a deep learning-based method designed to overcome the limitations of conventional normalization-to-atlas-based approaches and multi-atlas label-fusion (MALF) techniques. Brain image parcellation is a fundamental process in neuroscientific and clinical research, enabling detailed analysis of specific cerebral regions.',
        'overview.contributions.title': 'Key Contributions',
        'overview.contributions.item1': 'Processing completes in 1-2 minutes on GPU, approximately 30 minutes on CPU',
        'overview.contributions.item2': 'High robustness against variations in imaging environments and brain atrophy',
        'overview.contributions.item3': 'Hierarchical segmentation into 280 anatomical regions',
        'overview.contributions.item4': 'Uses JHU atlas',
        'features.title': 'Key Features',
        'features.speed.title': 'Fast Processing',
        'features.speed.text': 'T1-weighted image processing completes in 1-2 minutes on GPU, approximately 30 minutes on CPU.',
        'features.accuracy.title': 'High Accuracy',
        'features.accuracy.text': 'Deep learning models enable brain region segmentation with accuracy exceeding conventional methods.',
        'features.coverage.title': 'Whole Brain Coverage',
        'features.coverage.text': 'Hierarchically segments into 280 anatomical regions, covering the entire brain.',
        'features.robustness.title': 'Robustness',
        'features.robustness.text': 'Exhibits high robustness against variations in imaging environments and brain atrophy.',
        'features.hierarchical.title': 'Hierarchical Segmentation',
        'features.hierarchical.text': 'Flexible segmentation from 8 structures to 280 structures across 5 hierarchical levels.',
        'features.docker.title': 'Docker Support',
        'features.docker.text': 'Easy setup and execution using Docker containers.',
        'citation.title': 'Citation',
        'members.title': 'Members',
        'members.nishimaki.name': 'Kei Nishimaki',
        'members.nishimaki.affiliation': 'Department of Applied Informatics, Graduate School of Science and Engineering, Hosei University',
        'members.onda.name': 'Kengo Onda',
        'members.onda.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.ikuta.name': 'Kumpei Ikuta',
        'members.ikuta.affiliation': 'Department of Applied Informatics, Graduate School of Science and Engineering, Hosei University',
        'members.chotiyanonta.name': 'Jill Chotiyanonta',
        'members.chotiyanonta.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.uchida.name': 'Yuto Uchida',
        'members.uchida.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.mori.name': 'Susumu Mori',
        'members.mori.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.iyatomi.name': 'Hitoshi Iyatomi',
        'members.iyatomi.affiliation': 'Department of Applied Informatics, Graduate School of Science and Engineering, Hosei University',
        'members.lab': 'Laboratory',
        'members.scholar': 'Google Scholar',
        'members.company': 'Company',
        'members.oishi.name': 'Kenichi Oishi',
        'members.oishi.affiliation': 'The Russell H. Morgan Department of Radiology and Radiological Science, The Johns Hopkins University School of Medicine',
        'members.corresponding': '* Corresponding author',
        'contact.label': 'Contact:',
        'contact.email': 'koishi2@jhmi.edu',
        'meta.title': 'OpenMAP-T1 | Whole Brain Segmentation and Parcellation'
    }
};

// 現在の言語を取得（ローカルストレージから、またはデフォルトで日本語）
let currentLang = localStorage.getItem('language') || 'ja';

// 言語を切り替える関数
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // すべてのdata-i18n属性を持つ要素を更新
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            const text = translations[lang][key];
            // HTMLタグが含まれている場合はinnerHTML、そうでなければtextContent
            if (text.includes('<br>') || text.includes('<')) {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // html要素のlang属性を更新
    document.documentElement.lang = lang;
    
    // タイトルを更新
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][titleKey]) {
            document.title = translations[lang][titleKey];
        }
    }
    
    // 言語切り替えボタンのactiveクラスを更新
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ページ読み込み時に言語を適用
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // 言語切り替えボタンのイベントリスナー
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

