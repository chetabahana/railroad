import {
    Alternation,
    Flat,
    NonTerminal,
    Option,
    Repetition,
    RepetitionMandatory,
    RepetitionMandatoryWithSeparator,
    RepetitionWithSeparator,
    Rule,
    Terminal
} from "./gast_public"
import { IProduction } from "../../../../api"

export abstract class GAstVisitor {
    public visit(node: IProduction): any {
        const nodeAny: any = node
        switch (nodeAny.constructor) {
            case NonTerminal:
                return this.visitNonTerminal(nodeAny)
            case Flat:
                return this.visitFlat(nodeAny)
            case Option:
                return this.visitOption(nodeAny)
            case RepetitionMandatory:
                return this.visitRepetitionMandatory(nodeAny)
            case RepetitionMandatoryWithSeparator:
                return this.visitRepetitionMandatoryWithSeparator(nodeAny)
            case RepetitionWithSeparator:
                return this.visitRepetitionWithSeparator(nodeAny)
            case Repetition:
                return this.visitRepetition(nodeAny)
            case Alternation:
                return this.visitAlternation(nodeAny)
            case Terminal:
                return this.visitTerminal(nodeAny)
            case Rule:
                return this.visitRule(nodeAny)
            default:
                throw Error("non exhaustive match")
        }
    }

    public visitNonTerminal(node: NonTerminal): any {}

    public visitFlat(node: Flat): any {}

    public visitOption(node: Option): any {}

    public visitRepetition(node: Repetition): any {}

    public visitRepetitionMandatory(node: RepetitionMandatory): any {}

    public visitRepetitionMandatoryWithSeparator(
        node: RepetitionMandatoryWithSeparator
    ): any {}

    public visitRepetitionWithSeparator(node: RepetitionWithSeparator): any {}

    public visitAlternation(node: Alternation): any {}

    public visitTerminal(node: Terminal): any {}

    public visitRule(node: Rule): any {}
}
