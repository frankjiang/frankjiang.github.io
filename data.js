const profileData = {
  // 基础信息
  name: "Frank Jiang",
  role: "AI Researcher, Team Leader<br>Fantasy AIGC Team<br>AMAP, Alibaba",
  affiliation: "AMAP, Alibaba",
  emails: [
    "jiangfan0576@gmail.com",
    "frank.jf@alibaba-inc.com"
  ],
  scholarLink: "https://scholar.google.com/citations?user=vGy7egcAAAAJ",
  githubLink: "https://github.com/frankjiang",
  xLink: "https://x.com/frank_jiang0576",
  xhsLink: "https://www.xiaohongshu.com/user/profile/6212cba8000000001000fd98",

  // 关于我 (支持 HTML 标签)
  bio: `
        I am an AI researcher dedicated to the intersection of <strong>Artificial Intelligence and Creativity</strong>. 
        My work explores how generative models can surpass mere imitation to achieve genuine artistic expression. 
        I specialize in video generation, 3D world modeling, and controllable content synthesis.
        <br><br>
        Currently, I am focused on building large-scale multimodal systems that bridge the gap between human 
        imagination and digital realization ("<a href="https://github.com/Fantasy-AMAP/" target="_blank">Fantasy AIGC Family</a>").
    `,
  hiring: `
        <p>
            I am inviting exceptional <strong>Scientists and Interns</strong> to pioneer the frontiers of 
            <strong>World Models, AI Creativity, and Video Generation</strong>.
        </p>
        <br>
        <p>
            Join our pursuit of <strong>AGI</strong> to bridge the gap between imagination and reality. 
            If you are passionate about decoding the visual world and building the next generation of generative models, 
            please drop me an email with your CV.
        </p>
        <br>
        <a href="mailto:frank.jf@alibaba-inc.com" class="hiring-btn">
            <i class="fas fa-paper-plane"></i> Apply Now
        </a>
    `,
  // 近期新闻
  news: [
    { date: "Nov 2025", content: "FantasyTalking2 and FantasyHSI are accepted by AAAI 2026." },
    { date: "Aug 2025", content: "We release the inference code and model weights of FantasyPortrait." },
    { date: "Jul 2025", content: "FantasyTalking is accepted by ACM MM 2025." },
    { date: "Apr 2025", content: "We release the inference code and model weights of FantasyTalking, FantasyID." }
  ],

  // 职业/教育经历
  experience: [
    {
      role: "Senior AI Researcher",
      company: "AMAP, Alibaba Group",
      year: "2016 - Present"
    },
    {
      role: "Master of Engineering / Researcher",
      company: "Beijing University of Aeronautics and Astronautics (Beihang University)",
      year: "2013 - 2016"
    },
    {
      role: "Bachelor of Engineering",
      company: "Zhejiang University of Technology",
      year: "2009 - 2013"
    }
  ],

  mapWidget: `
        <a href="https://mapmyvisitors.com/web/1c15f" title="Visit tracker" target="_blank">
            <img src="https://mapmyvisitors.com/map.png?d=ZQhG5JCKiJSeeuN9mZIfRQMRmDAweJaIPu59M4RlBa8&cl=ffffff" style="max-width: 100%; opacity: 0.8; border-radius: 8px;" />
        </a>
    `,

  // 下面粘贴你的 BibTex。
  // 注意：请使用反引号 ` 包裹整个 BibTex 字符串。
  bibtex: `

@article{dai2025fantasyworld,
  title={FantasyWorld: Geometry-Consistent World Modeling via Unified Video and 3D Prediction},
  author={Dai, Yixiang and Jiang, Fan and Wang, Chiyu and Xu, Mu and Qi, Yonggang},
  journal={arXiv preprint arXiv:2509.21657},
  year={2025},
  role={Project Leader; Corresponding Author; Co-First Author},
  url={https://fantasy-amap.github.io/fantasy-world/},
  github={Fantasy-AMAP/fantasy-world}
}

@inproceedings{wang2025fantasytalking,
  title={FantasyTalking: Realistic talking portrait generation via coherent motion synthesis},
  author={Wang, Mengchao and Wang, Qiang and Jiang, Fan and Fan, Yaqi and Zhang, Yunpeng and Qi, Yonggang and Zhao, Kun and Xu, Mu},
  booktitle={ACM Multimedia 2025},
  pages={9891--9900},
  year={2025},
  role={Project Leader},
  url={https://fantasy-amap.github.io/fantasy-talking/},
  github={Fantasy-AMAP/fantasy-talking}
}

@article{wang2025fantasyportrait,
  title={FantasyPortrait: Enhancing multi-character portrait animation with expression-augmented diffusion transformers},
  author={Wang, Qiang and Wang, Mengchao and Jiang, Fan and Fan, Yaqi and Qi, Yonggang and Xu, Mu},
  journal={arXiv preprint arXiv:2507.12956},
  year={2025},
  role={Project Leader},  
  url={https://fantasy-amap.github.io/fantasy-portrait/},
  github={Fantasy-AMAP/fantasy-portrait}
}

@inproceedings{wang2025fantasytalking2,
  title={FantasyTalking2: Timestep-Layer Adaptive Preference Optimization for Audio-Driven Portrait Animation},
  author={Wang, MengChao and Wang, Qiang and Jiang, Fan and Xu, Mu},
  booktitle={AAAI 2026},
  year={2025},
  role={Project Leader},
  url={https://fantasy-amap.github.io/fantasy-talking/},
  github={Fantasy-AMAP/fantasy-talking2}
}

@inproceedings{mu2025fantasyhsi,
  title={FantasyHSI: Video-Generation-Centric 4D Human Synthesis In Any Scene through A Graph-based Multi-Agent Framework},
  author={Mu, Lingzhou and Wang, Qiang and Jiang, Fan and Wang, Mengchao and Fan, Yaqi and Xu, Mu and Zhang, Kai},
  booktitle={AAAI 2026},
  year={2025},
  role={Project Leader},
  url={https://fantasy-amap.github.io/fantasy-hsi/},
  github={Fantasy-AMAP/fantasy-hsi}
}
`
};
