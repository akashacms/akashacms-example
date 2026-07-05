---
layout: default.html.ejs
title: Mermaid examples
tags: Mermaid
---

This file demonstrates using Mermaid diagrams.

This is an inline Mermaid document using a code fence with mermaid language

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

------------------

This is a Mermaid document read from a file, and rendered to a file

<diagrams-mermaid
        id="mermaid-sequence"
        alt="Mermaid sequence diagram example"
        title="Mermaid sequence diagram example"
        caption="Fig 2. Mermaid sequence diagram example"
        input-file='mermaid-example-sequence.mmd'
        output-file='mermaid-example-sequence.svg'/>

------------------

This is a Mermaid document read from a file, and rendered to a different file

<diagrams-mermaid
        id="mermaid-graph-different-file"
        alt="Mermaid graph rendered to different example"
        title="Mermaid graph rendered to different example"
        caption="Fig 3. Mermaid graph rendered to different example"
        input-file='mermaid-example-graph.mmd'
        output-file='mermaid-example-graph-different-file-name.svg'/>

-------------------

This is a Mermaid document read inline, and rendered to yet another file

<diagrams-mermaid
        id="mermaid-graph-inline"
        alt="Mermaid graph rendered inline to another file example"
        title="Mermaid graph rendered inline to another file example"
        caption="Fig 4. Mermaid graph rendered inline to another file example"
        output-file='mermaid-example-graph-yet-another-file-name.svg'>
graph TD;
    InlineMermaid-->SVGFile;
    SVGFile-->ReferredFromHTML;
</diagrams-mermaid>

-----------

This is a Mermaid document read inline, and rendered inline

<diagrams-mermaid
        id="mermaid-graph-inline"
        alt="Mermaid graph rendered inline viewed inline example"
        title="Mermaid graph rendered inline viewed inline example"
        caption="Fig 6. Mermaid graph rendered inline viewed inline example">
graph TD;
    InlineMermaid-->Buffer;
    Buffer-->InlineHTML;
</diagrams-mermaid>


------------

This is an extremely wide Mermaid sequence diagram

```mermaid
sequenceDiagram
title Extremely wide sequence diagram
actor Configuration
actor Stage1
actor Stage2
actor Stage3
actor Stage4
actor Stage5
actor Stage6
actor Stage7
actor Stage8
actor Stage9

Configuration->>Stage1: Configure the system
Stage1->>Stage2: First stage
Stage2->>Stage3: Second stage
Stage3->>Stage4: Third stage
Stage4->>Stage5: Fourth stage
Stage5->>Stage6: Fifth stage
Stage6->>Stage7: Sixth stage
Stage7->>Stage8: Seventh stage
Stage8->>Stage9: Eighth stage

Stage9->>Stage8: First reply
Stage8->>Stage7: Second reply
Stage7->>Stage6: Third reply
Stage6->>Stage5: Fourth reply
Stage5->>Stage4: Fifth reply
Stage4->>Stage3: Sixth reply
Stage3->>Stage2: Seventh reply
Stage2->>Stage1: Eighth reply
```

-----------------

This is the wide sequence file rendered from a file, to a file

<diagrams-mermaid
        id="mermaid-wide-sequence-from-to-file"
        alt="Mermaid wide sequence diagram example from a file, to a file"
        title="Mermaid wide sequence diagram example from a file, to a file"
        caption="Fig 3. Mermaid wide sequence diagram example from a file, to a file"
        input-file='./mermaid-wide-sequence-diagram.mmd'
        output-file='./mermaid-wide-sequence-diagram.svg'/>


-----------------

This is the wide sequence file rendered from a file, to inline

<diagrams-mermaid
        id="mermaid-wide-sequence-from-to-inline"
        alt="Mermaid wide sequence diagram example from a file, to inline"
        title="Mermaid wide sequence diagram example from a file, to inline"
        caption="Fig 3. Mermaid wide sequence diagram example from a file, to inline"
        input-file='./mermaid-wide-sequence-diagram.mmd'/>
